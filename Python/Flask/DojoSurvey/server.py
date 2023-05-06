from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")


@app.route('/process', methods=['POST'])
def process():
    session['username'] = request.form['username']
    




if __name__ == '__main__':
    app.run(debug=True)