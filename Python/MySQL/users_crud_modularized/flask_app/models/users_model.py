from flask_app.config.mysqlconnection import connectToMySQL

database = 'users_cr'

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(database).query_db(query)

        users = []
        for user in results:
            users.append(cls(user))
        return users
    
    @classmethod
    def create_new_user(cls, data):
        query = """INSERT INTO users (first_name, last_name, email)
                    VALUES( %(first_name)s, %(last_name)s, %(email)s )"""
        result = connectToMySQL(database).query_db(query,data)
        return result
    
    @classmethod
    def update_user(cls, data):
        query = """UPDATE users
                    SET first_name = %(first_name)s, 
                    last_name = %(last_name)s,
                    email = %(email)s
                    WHERE id = %(id)s;"""
        return connectToMySQL(database).query_db(query, data)
    
    @classmethod
    def delete_user(cls, user_id):
        query = """DELETE FROM users
                    WHERE id = %(id)s"""
        return connectToMySQL(database).query_db(query, {'id' : user_id})