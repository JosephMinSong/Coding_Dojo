from flask import Flask, render_template, request, redirect, session
import random
import datetime
app = Flask(__name__)
app.secret_key = 'secretkey'

# Render Templates
@app.route('/')
def index():
    if 'gold_count' not in session:
        session['gold_count'] = 0

    if 'rounds' not in session:
        session['rounds'] = 0

    return render_template("index.html")

@app.route('/win')
def win():
    return render_template("win.html")


# POST Methods
@app.route('/process_money', methods=['POST'])
def process():
    session['player_choice'] = request.form['choice']
    session['rounds'] += 1

    if 'activities' not in session:
        session['activities'] = []

    if session['player_choice'] == 'farm':
        session['gold_earned'] = random.randint(10,20)

    elif session['player_choice'] == 'cave':
        session['gold_earned'] = random.randint(5,10)

    elif session['player_choice'] == 'house':
        session['gold_earned'] = random.randint(2,5)

    elif session['player_choice'] == 'casino':
        session['gold_earned'] = random.randint(-50,50)
    
    session['gold_count'] += session['gold_earned']

    if session['gold_earned'] > 0:
        session['activities'].append(
                "<p class='win'> Earned " + str(session['gold_earned']) + " gold from the casino! (" +
                "{:%Y/%m/%d %I:%M %p})".format(datetime.datetime.now()) + "</p>"
            )
    else: 
        session['activities'].append(
                "<p class='loss'> Lost " + str(session['gold_earned']) + " gold from the casino! (" +
                "{:%Y/%m/%d %I:%M %p})".format(datetime.datetime.now()) + "</p>"
            )

    if session['gold_count'] >= 500:
        return redirect('/win')
    else: 
        return redirect('/')


@app.route('/reset')
def reset():
    session.clear()
    return redirect("/")

if __name__ == '__main__':
    app.run(debug=True)