from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key = 'secretkey'

# Render Templates
@app.route('/')
def index():
    session['random_num'] = random.randint(1, 100)
    session['attempts'] = 0

    return render_template("index.html")

@app.route('/toolow')
def toolow():
    return render_template("toolow.html")

@app.route('/toohigh')
def toohigh():
    return render_template("toohigh.html")

@app.route('/correct')
def correct():
    return render_template("correct.html")

@app.route('/failed')
def failed():
    return render_template("failed.html")

@app.route('/leaderboard')
def leaderboard():
    return render_template("leaderboard.html")



# ***POST METHODS*** 

    # User guesses
@app.route('/guess', methods = ['POST'])
def guess():
    session['userguess'] = int(request.form['guess'])

    session['attempts'] += 1

    print(session['random_num'])
    
    if session['userguess'] == session['random_num']:
        return redirect('correct')
    
    if session['attempts'] > 5:
        return redirect('/failed')
    
    return redirect('toolow') if session['userguess'] < session['random_num'] else redirect('toohigh')



    # User name for leaderboard
@app.route('/getusername', methods = ["POST"])
def getusername():

    if 'winners' not in session:
        session['winners'] = []

    current = {}
    current['user_name'] = request.form['user_name']
    current['attempts'] = session['attempts']

    session['winners'].append(current)

    session['winners'] = sorted(session['winners'], key=lambda x:x['attempts'])

    return redirect('/leaderboard')




# ***RESET***
@app.route('/reset')
def reset():
    del session['random_num']
    del session['attempts']
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)