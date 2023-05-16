from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user_model
from flask_app import DATABASE
from datetime import datetime
import math

class Message:
    def __init__(self, data):
        self.id = data['id']
        self.sender_id = data['sender_id']
        self.receiver_id = data['receiver_id']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def send(cls, data):
        query = """INSERT INTO messages (sender_id, receiver_id, content)
                    VALUES (%(sender_id)s, %(receiver_id)s, %(content)s)"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_all_messages_from_user(cls, data):
        query = """SELECT * FROM messages
                    JOIN users ON messages.sender_id = users.id
                    WHERE users.id = %(id)s"""
        result = connectToMySQL(DATABASE).query_db(query, data)
        all_sent_messages = []
        for sent_message in result:
            all_sent_messages.append(cls(sent_message))
        return all_sent_messages
    
    @classmethod
    def delete(cls, data):
        query = """DELETE FROM messages
                    WHERE id = %(id)s"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @staticmethod
    def validate_message(data):
        is_valid = True
        if len(data['content']) < 1:
            flash('Text field must not be empty', 'message')
            is_valid = False
        return is_valid
    
    def time_span(self):
        now = datetime.now()
        delta = now - self.created_at
        if delta.days > 0:
            return f"{delta.days} days ago"
        elif (math.floor(delta.total_seconds() / 60)) >= 60:
            return f"{math.floor(math.floor(delta.total_seconds() / 60)/60)} hours ago"
        elif delta.total_seconds() >= 60:
            return f"{math.floor(delta.total_seconds() / 60)} minutes ago"
        else:
            return f"{math.floor(delta.total_seconds())} seconds ago"
    