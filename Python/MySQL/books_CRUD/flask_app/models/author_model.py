from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_author(cls, data):
        query = """INSERT INTO authors (name)
                    VALUES (%(name)s)"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_author_by_id(cls, data):
        query = """SELECT * FROM authors
                    WHERE id = %(id)s"""
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return cls(result[0])
        return False
    
    @classmethod
    def get_all_authors(cls):
        query = """SELECT * FROM authors"""
        result = connectToMySQL(DATABASE).query_db(query)
        all_authors = []
        for author in result:
            all_authors.append(cls(author))
        return all_authors
    
    @staticmethod
    def validate_new_author(data):
        is_valid = True
        if len(data['name']) < 1:
            flash('Please enter a name before submitting', 'author')
            is_valid = False
        return is_valid