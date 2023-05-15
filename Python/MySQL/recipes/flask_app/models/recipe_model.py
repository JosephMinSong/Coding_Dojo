from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user_model
from flask_app import DATABASE

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.cooked_made = data['cooked_made']
        self.under_30 = data['under_30']
        self.poster = None
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all_recipes(cls):
        query = """SELECT * FROM recipes
                    LEFT JOIN users ON recipes.user_id = users.id"""
        result = connectToMySQL(DATABASE).query_db(query)
        all_recipes = []
        for recipe in result:
            one_recipe = cls(recipe)
            poster_data = {
                **recipe,
                'id' : recipe['users.id'],
                'created_at' : recipe['users.created_at'],
                'updated_at' : recipe['users.updated_at']
            }
            one_recipe.poster = user_model.User.get_user_by_id(poster_data)
            all_recipes.append(one_recipe)
        return all_recipes

    @classmethod 
    def get_recipe_by_id(cls, data):
        query = """SELECT * FROM recipes
                    JOIN users ON recipes.user_id = users.id
                    WHERE recipes.id = %(id)s"""
        result = connectToMySQL(DATABASE).query_db(query,data)[0]
        recipe = cls(result)
        poster_data = {
                **result,
                'id' : result['users.id'],
                'created_at' : result['users.created_at'],
                'updated_at' : result['users.updated_at']
            }
        recipe.poster = user_model.User.get_user_by_id(poster_data)
        return recipe
    
    @classmethod
    def create_recipe(cls, data):
        query = """INSERT INTO recipes (name, user_id, description, instructions, cooked_made, under_30)
                    VALUES(%(name)s, %(user_id)s, %(description)s, %(instructions)s, %(cooked_made)s, %(under_30)s)"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def edit_recipe(cls, data):
        query = """UPDATE recipes
                    SET name = %(name)s
                        description = %(description)s
                        instructions = %(instructions)s
                        cooked_made = %(cooked_made)s
                        under_30 = %(under_30)s
                        WHERE id = %(id)s"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def delete_recipe(cls, data):
        query = """DELETE FROM recipes
                    WHERE id = %(id)s"""
        return connectToMySQL(DATABASE).query_db(query, data)
    
    
        
