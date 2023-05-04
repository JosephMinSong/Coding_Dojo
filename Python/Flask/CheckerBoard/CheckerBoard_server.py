from flask import Flask, render_template
app = Flask(__name__)
@app.route('/<int:height>/<int:width>/')
def index(height, width):
    return render_template("index.html", height = height, width = width)

@app.route('/<int:height>/<int:width>/<string:color1>')
def color1(height, width, color1):
    return render_template("index.html", height=height, width=width, color1=color1)

@app.route('/<int:height>/<int:width>/<string:color1>/<string:color2>')
def color2(height, width, color1, color2):
    return render_template("index.html", height=height, width=width, color1=color1, color2=color2)

if __name__ == "__main__":
    app.run(debug=True)
