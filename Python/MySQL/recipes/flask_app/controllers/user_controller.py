from flask_app import app
from flask import render_template, redirect, session, request, flash
from flask_bcrypt import Bcrypt
from flask_app.models.user_model import User
bcrypt = Bcrypt(app)

# *********************************All render/redirects***********************************

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')



# *******************************All posts**************************************************

@app.route('/process_registration', methods=['POST'])
def registration():
    if not User.validate_user_reg(request.form):
        return redirect('/')

    new_user = User.create_user(request.form)
    session['user_id'] = new_user.id
    return redirect('/recipes')

@app.route('/process_login', methods=['POST'])
def login():
    valid_user = User.validate_user_login(request.form)
    print("I'm printing it here:", valid_user)

    if not valid_user:
        return redirect('/')

    session['user_id'] = valid_user.id
    return redirect('/recipes')