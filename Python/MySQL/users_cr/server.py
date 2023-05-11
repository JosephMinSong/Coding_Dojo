from flask import Flask, render_template, redirect, request
from users_cr import User
app = Flask(__name__)
app.secret_key = 'secretkey'

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

if __name__ == "__main__":
    app.run(debug=True)