from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.ninjas_model import Ninja
from flask_app.models.dojos_model import Dojo

@app.route('/ninja/new')
def new_ninja():
    all_dojos = Dojo.get_all_dojos()
    return render_template('new_ninja.html', all_dojos=all_dojos)

@app.route('/ninjas/create_new_ninja', methods=["POST"])
def create_ninja():
    Ninja.add_new_ninja(request.form)
    print(request.form)
    return redirect('/dojos')

@app.route('/ninjas/remove/<int:ninja_id>/<int:dojo_id>')
def remove_ninja(ninja_id, dojo_id):
    Ninja.remove_ninja(ninja_id)
    return redirect(f'/dojos/{dojo_id}')



