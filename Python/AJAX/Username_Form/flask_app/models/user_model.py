from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
import re

class User:
    def __init__(self, data):
        self.id = data['id']
        self.username = data['username']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all(cls):
        query = """SELECT * FROM users"""
        result = connectToMySQL(DATABASE).query_db(query)

        return result
    
    @classmethod
    def get_one(cls, data):
        query = """SELECT * FROM users
                    WHERE id = %(id)s"""
        result = connectToMySQL(DATABASE).query_db(query, data)
        return cls(result[0])

    @classmethod
    def create(cls, data):
        query = """INSERT INTO users (username, email)
                    VALUES (%(username)s, %(email)s)"""
        return connectToMySQL(DATABASE).query_db(query, data)

    

    