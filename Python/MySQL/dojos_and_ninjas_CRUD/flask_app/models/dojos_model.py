from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninjas_model

database = 'dojos_and_ninjas'

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    @classmethod
    def get_all_dojos(cls):
        query = """SELECT * FROM dojos"""
        result = connectToMySQL(database).query_db(query)

        all_dojos = []
        for dojo in result:
            all_dojos.append(cls(dojo))
        return all_dojos
    
    @classmethod
    def get_one_dojo_with_many_ninjas(cls, dojo_id):
        query = """SELECT * FROM dojos 
                LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id 
                WHERE dojos.id = %(id)s;"""
        results = connectToMySQL(database).query_db( query , {'id':dojo_id} )
        dojo = cls(results[0]) 
        print(dojo)
        for ninja in results:

            ninja_data = {
                **ninja,
                'id': ninja['ninjas.id'],
                'created_at': ninja['ninjas.created_at'],
                'updated_at': ninja['ninjas.updated_at']
            }

            dojo.ninjas.append(ninjas_model.Ninja(ninja_data))
        
        return dojo
    
    @classmethod
    def create_new_dojo(cls, data):
        query = """INSERT INTO dojos (name)
                    VALUES (%(name)s)"""
        return connectToMySQL(database).query_db(query, data)


