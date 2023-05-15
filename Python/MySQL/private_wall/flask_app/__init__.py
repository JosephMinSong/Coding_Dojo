from flask import Flask
app = Flask(__name__)
app.secret_key = 'secretkey'
DATABASE = 'login_and_registration'