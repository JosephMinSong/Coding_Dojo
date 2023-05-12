from flask import render_template, redirect, session, request
from flask_app import app
from flask_app.models.survey_model import Survey

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_survey', methods=['POST'])
def process_survey():
    if not Survey.is_survey_valid(request.form):
        return redirect('/')
    
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']

    Survey.create_survey_response(request.form)
    
    return redirect('/result')

@app.route('/result')
def result():
    return render_template('results.html')

@app.route('/reset_survey')
def reset_survey():
    session.clear()
    return redirect('/')
