from flask_app.config.mysqlconnection import connectToMySQL

database = 'dojos_and_ninjas'

class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']

    @classmethod
    def add_new_ninja(cls, data):
        query = """INSERT INTO ninjas(first_name, last_name, age, dojo_id)
                    VALUES(%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);"""
        return connectToMySQL(database).query_db(query, data)
    
    @classmethod
    def remove_ninja(cls, ninja_id):
        query = """DELETE FROM ninjas
                    WHERE id=%(id)s"""
        return connectToMySQL(database).query_db(query, {'id': ninja_id})
        

