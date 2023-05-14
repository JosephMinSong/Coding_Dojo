from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import user_model

class Message:
    def __init__(self, data):
        self.id = data['id']
        self.sender = data['sender_id']
        self.receiver = data['reciever_id']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def create_message(cls, data):
        query = """INSERT INTO messages (sender_id, reciever_id, content)
                    VALUES (%(sender_id)s, %(receiver_id)s, %(content)s);"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def delete_message(cls, data):
        query = """DELETE FROM messages
                    WHERE id = %(id)s"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_all_messages_for_one_user(cls, data):
        query = """SELECT * FROM messages
                    JOIN users AS sender ON messages.sender_id = sender.id
                    WHERE messages.receiver_id = %(id)s"""
        result = connectToMySQL(DATABASE).query_db(query, data)

        messages = []
        for message in result:
            pass
        return result

