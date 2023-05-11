from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.users_model import User

@app.route('/users')
def index():
    users = User.get_all_users()
    print(users)
    return render_template('index.html', users=users)

@app.route('/users/new')
def new_user():
    return render_template('create_new_user.html')

@app.route('/users/create_new_user', methods=['POST'])
def create_user():
    User.create_new_user(request.form)
    return redirect('/users')

@app.route('/users/edit/<int:user_id>')
def edit_user(user_id):
    return render_template('update.html')

@app.route('/users/update/<int:user_id>', methods=['POST'])
def update_user(user_id):
    data = {**request.form,
            'id': user_id}
    User.update_user(data)
    return redirect('/users')

@app.route('/users/delete/<int:user_id>')
def delete_user(user_id):
    User.delete_user(user_id)
    return redirect('/users')