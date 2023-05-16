from flask_app import app
from flask import render_template, redirect, session, request, flash
from flask_app.models.message_model import Message


# All renders/redirects
@app.route('/messages/<int:message_id>/delete')
def delete_message(message_id):
    data = {'id': message_id}
    Message.delete(data)
    return redirect('/wall')


# All Posts
@app.route('/messages/send_message', methods=["POST"])
def send_message():
    if not Message.validate_message(request.form):
        return redirect('/wall')
    
    Message.send(request.form)
    return redirect('/wall')