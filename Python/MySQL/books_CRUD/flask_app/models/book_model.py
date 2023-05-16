from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_book(cls, data):
        query = """INSERT INTO books (title, num_of_pages)
                    VALUES (%(title)s, %(num_of_pages)s)"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_book_by_id(cls, data):
        query = """SELECT * FROM books
                    WHERE id = %(id)s"""
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return cls(result[0])
        return False
    
    @classmethod
    def get_all_books(cls):
        query = """SELECT * FROM books"""
        result = connectToMySQL(DATABASE).query_db(query)
        all_books = []
        for book in result:
            all_books.append(cls(book))
        return all_books
    
    @staticmethod
    def validate_book(data):
        is_valid = True
        print(data)
        if len(data['title']) < 1:
            flash('Please enter a title', 'books')
            is_valid = False
        if len(data['num_of_pages']) < 1:
            flash('Please enter the number of pages', 'books')
            is_valid = False
        return is_valid
