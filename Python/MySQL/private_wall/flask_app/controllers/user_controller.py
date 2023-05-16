from flask_app import app
from flask import render_template, redirect, session, request, flash
from flask_bcrypt import Bcrypt
from flask_app.models.user_model import User
from flask_app.models.message_model import Message
bcrypt = Bcrypt(app)


# ************************All renders/redirects***********************************
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/wall')
def wall():
    if 'user_id' not in session: 
        return redirect('/')
    
    data = {'id' : session['user_id']}

    user = User.get_user_by_id(data)
    all_users = User.get_all_users(data)
    all_messages = User.get_all_messages_for_user(data)
    all_sent_messages = Message.get_all_messages_from_user(data)

    return render_template('wall.html', user=user, all_messages=all_messages, all_users=all_users, all_sent_messages=all_sent_messages)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')



# **************************All Post methods*************************************
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
    return redirect('/wall')

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
    return redirect('/wall')


