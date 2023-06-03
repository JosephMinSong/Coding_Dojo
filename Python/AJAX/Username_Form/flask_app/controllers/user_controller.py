from flask_app import app
from flask import render_template, redirect, session, request, flash, jsonify
from flask_app.models.user_model import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users')
def all_users():
    all_users = User.get_all()
    return all_users

@app.route('/users/create', methods=['POST'])
def create():
    user_id = User.create(request.form)
    user = User.get_one({'id' : user_id})
    return jsonify(username=user.username, email=user.email) 


