from flask_app import app
from flask import render_template, redirect, session, request, flash
from flask_app.models.user_model import User
from flask_app.models.message_model import Message

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    user = User.get_user_by_id({'id': session['user_id']})

    all_messages = Message.get_all_messages_for_one_user({'id' : session['user_id']})

    return render_template('dashboard.html', user=user, all_messages=all_messages)