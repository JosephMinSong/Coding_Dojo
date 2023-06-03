from flask_app import app
from flask import render_template, redirect, session, request, flash
import os

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search')
def search():
    return os.environ.get('API-KEY')
