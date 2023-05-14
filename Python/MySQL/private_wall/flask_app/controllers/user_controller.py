from flask_app import app
from flask import render_template, redirect, session, request, flash
from flask_app.models.user_model import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# All Post methods
@app.route('/process_registration', methods=['POST'])
def registration():
    if not User.validate_user_reg(request.form):
        return redirect('/')
    
    hashed_pass = bcrypt.generate_password_hash(request.form['password'])
    data = {
        **request.form,
        'password' : hashed_pass,
        'confirm_pass' : hashed_pass
    }

    logged_user = User.create_user(data)
    session['user_id'] = logged_user
    return redirect('/dashboard')

@app.route('/process_login', methods=['POST'])
def login():
    data = {
        'email' : request.form['email']
    }
    user = User.get_user_by_email(data)
    if not user:
        flash('Invalid login credentials', 'login')
        return redirect('/')
    
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash('Invalid login credentials', 'login')
        return redirect('/')
    
    session['user_id'] = user.id
    return redirect('/dashboard')