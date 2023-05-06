from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)
app.secret_key = 'secretkey'

# Render Templates
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result')
def result():
    return render_template("result.html")



# POST Methods
@app.route('/process', methods=['POST'])
def process():
    session['username'] = request.form['username']
    session['location'] = request.form['location']
    session['comments'] = request.form['comments']
    session['language'] = request.form.getlist('language')

    return redirect('/result')



# Debug
if __name__ == '__main__':
    app.run(debug=True)