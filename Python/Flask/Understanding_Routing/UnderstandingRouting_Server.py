from flask import Flask
app = Flask(__name__)
@app.route('/')
def welcome_message():
    return "Hello World!"

@app.route('/dojo')
def dojo_message():
    return "Dojo!"

@app.route('/say/<string:name>')
def say_my_name(name):
    return f"Hi {name}!"

@app.route('/repeat/<int:num>/<string:string>')
def repeat_my_str(num, string):
    return (string + " ") * num

@app.errorhandler(404)
def page_not_found(error):
    return "Sorry! No response. Try again.", 404


if __name__ == "__main__":
    app.run(debug=True)