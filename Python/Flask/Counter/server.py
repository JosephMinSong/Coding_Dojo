from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'secretkey'
@app.route('/')
def index():
    if 'visits' not in session:
        session['visits'] = 1
    else: 
        session['visits'] += 1

    if 'actual_visits' not in session:
        session['actual_visits'] = 1
    else:
        session['actual_visits'] += 1

    return render_template("index.html", visits = session['visits'], actual_visits = session['actual_visits'])

@app.route('/users', methods = ['POST'])
def createuser():
    session['first_name'] = request.form['first_name']
    session['last_name'] =  request.form['last_name']
    session['user_username'] = request.form['user_username']
    session['user_city'] = request.form['user_city']
    session['user_state'] = request.form['user_state']
    session['user_zip'] = request.form['user_zip']
    print(request.form)
    return redirect('/')

@app.route('/getuserincrement', methods = ['POST'])
def getuserincrement():
    session['user_input'] = int(request.form['user_input'])
    print(request.form)
    return redirect('/')

@app.route('/adduserincrement')
def adduserincrement():
    if 'user_input' not in session:
        print('Increment not specified')
    else:
        session['visits'] += session['user_input'] - 1
    return redirect('/')

@app.route('/reset')
def reset():
    session['visits'] = 0
    session['actual_visits'] = 0
    return redirect('/')

@app.route('/destroy_session')
def destroy_session():
    session.pop('first_name')
    session.pop('visits')
    session.pop('actual_visits')
    session.clear
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)