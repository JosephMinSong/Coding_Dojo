from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

database = 'dojo_surveys'

class Survey:
    def __init__(self,data):
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def create_survey_response(cls, data):
        query = """INSERT INTO surveys (name, location, language, comment)
                    VALUES (%(name)s, %(location)s, %(language)s, %(comment)s)"""
        return connectToMySQL(database).query_db(query, data)

    @classmethod
    def get_all_survey_responses(cls):
        query = """SELECT * FROM surveys"""
        result = connectToMySQL(database).query_db(query)
        all_surveys = []
        for survey in result:
            all_surveys.append(cls(survey))
        return all_surveys
    
    @staticmethod
    def is_survey_valid(data):
        is_valid = True
        if int(len(data['name']) < 1):
            flash("Please enter your name", 'name')
            is_valid = False
        if 'location' not in data:
            flash("Please enter your location", 'location')
            is_valid = False
        if 'language' not in data:
            flash("Please enter your favorite language", 'language')
            is_valid = False
        if int(len(data['comment']) < 10):
            flash("Please give us some comments/feedback that is at least 10 characters long", 'comment')
            is_valid = False
        return is_valid
