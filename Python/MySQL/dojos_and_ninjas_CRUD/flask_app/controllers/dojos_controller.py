from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojos_model import Dojo

@app.route('/dojos')
def index():
    all_dojos = Dojo.get_all_dojos()
    return render_template('index.html', all_dojos=all_dojos)

@app.route('/dojos/<int:dojo_id>')
def dojo(dojo_id):
    dojo = Dojo.get_one_dojo_with_many_ninjas(dojo_id)
    return render_template('one_dojo.html', dojo=dojo)

@app.route('/dojos/new')
def new_dojo():
    return render_template('new_dojo.html')

@app.route('/dojos/create_dojo', methods=['POST'])
def create_dojo():
    Dojo.create_new_dojo(request.form)
    return redirect('/dojos')
