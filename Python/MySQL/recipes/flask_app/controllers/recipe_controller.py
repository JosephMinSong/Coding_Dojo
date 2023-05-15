from flask_app import app
from flask import render_template, redirect, session, request, flash
from flask_bcrypt import Bcrypt
from flask_app.models.user_model import User
from flask_app.models.recipe_model import Recipe



# ******************All renders/redirects*******************************

@app.route('/recipes')
def dashboard():
    if 'user_id' not in session:
        flash("Please log in or register an account with us", 'dashboard')
        return redirect('/')
    
    user = User.get_user_by_id({'id':session['user_id']})
    all_recipes = Recipe.get_all_recipes()
    return render_template('recipes.html', user=user, all_recipes=all_recipes)

@app.route('/recipes/new')
def new_recipe():
    user = User.get_user_by_id({'id':session['user_id']})
    return render_template('add_recipe.html', user=user)

@app.route('/recipes/<int:recipe_id>')
def get_recipe(recipe_id):
    user = User.get_user_by_id({'id':session['user_id']})
    recipe = Recipe.get_recipe_by_id({'id':recipe_id})
    return render_template('recipe.html', user=user, recipe = recipe)

@app.route('/recipes/edit/<int:recipe_id>')
def edit_recipe(recipe_id):
    user = User.get_user_by_id({'id':session['user_id']})
    recipe = Recipe.get_recipe_by_id({'id':recipe_id})
    return render_template('edit_recipe.html', user=user, recipe = recipe)

@app.route('/recipes/delete/<int:recipe_id>')
def delete_recipe(recipe_id):
    Recipe.delete_recipe({'id':recipe_id})
    return redirect('/recipes')



# **********************All posts*************************************

@app.route('/recipes/process_edit', methods=['POST'])
def process_edit_recipe():
    Recipe.edit_recipe(request.form)
    return redirect('/recipes')

@app.route('/recipes/create', methods=["POST"])
def create_recipe():
    Recipe.create_recipe(request.form)
    return redirect('/recipes')