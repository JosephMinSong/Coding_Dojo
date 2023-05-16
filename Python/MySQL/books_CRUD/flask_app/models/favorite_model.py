from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import author_model, book_model
import re

class Favorite:
    def __init__(self, data):
        self.author_id = data['author_id']
        self.book_id = data['book_id']

    @classmethod
    # create
    def create_favorite_relationship(cls, data):
        query = """INSERT INTO favorites (author_id, book_id)
                    VALUES (%(author_id)s, %(book_id)s)"""
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    # get_favorites_one_author:
    def get_all_favorites_for_one_author(cls, data): 
        query = """SELECT * FROM favorites
                    JOIN books ON favorites.book_id = books.id
                    JOIN authors ON favorites.author_id = authors.id
                    WHERE authors.id = %(id)s"""
        result = connectToMySQL(DATABASE).query_db(query, data)

        all_favorites = []
        for one_book in result:
            favorite = cls(one_book)

            book_data = {
                **one_book,
                'id' : one_book['book_id'],
            }
            author_data = {
                **one_book,
                'id' : one_book['author_id'],
                'created_at' : one_book['authors.created_at'],
                'updated_at' : one_book['authors.updated_at']
            }

            favorite.book = book_model.Book(book_data)
            favorite.author = author_model.Author(author_data)
            all_favorites.append(favorite)
        return all_favorites

    
    @classmethod
    # get_authors_favorited
    def get_all_authors_who_favorited_book(cls, data):
        query = """SELECT * FROM favorites
                    JOIN authors ON favorites.author_id = authors.id
                    JOIN books ON favorites.book_id = books.id
                    WHERE books.id = %(id)s"""
        result = connectToMySQL(DATABASE).query_db(query, data)

        all_authors = []
        for one_author in result:
            author_data = {
                **one_author,
                'id' : one_author['author_id'],
            }
            author = author_model.Author(author_data)
            all_authors.append(author)
        return all_authors

    @classmethod
    # get_authors_not_favorited
    def get_all_authors_who_havent_favorited_book(cls, data):
        query = """SELECT * FROM authors
                    WHERE NOT authors.id IN (SELECT author_id FROM favorites WHERE book_id = %(id)s)"""
        result = connectToMySQL(DATABASE).query_db(query, data)

        all_authors = []
        for author in result:
            all_authors.append(author_model.Author(author))
        return all_authors

    @classmethod
    # get_books_not_favorited
    def get_all_unfavorited_books(cls, data):
        query = """SELECT * FROM books
                    WHERE NOT books.id IN (SELECT book_id FROM favorites WHERE author_id = %(id)s)"""
        result = connectToMySQL(DATABASE).query_db(query, data)

        all_books = []
        for book in result:
            all_books.append(book_model.Book(book))
        return all_books

    @classmethod
    # remove_user_favorite
    def remove_favorite_from_user(cls, data):
        query = """DELETE FROM favorites
                    WHERE book_id = %(id)s"""
        return connectToMySQL(DATABASE).query_db(query, data)


