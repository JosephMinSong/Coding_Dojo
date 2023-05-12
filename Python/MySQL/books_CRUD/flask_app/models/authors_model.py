from flask_app.config.mysqlconnection import connectToMySQL

database = 'books'

class Authors:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all_authors(cls):
        query = """SELECT * FROM authors"""
        result = connectToMySQL(database).query_db(query)
        all_authors = []
        for author in result:
            all_authors.append(cls(author))
        return all_authors