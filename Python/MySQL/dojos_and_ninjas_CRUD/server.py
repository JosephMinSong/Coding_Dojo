from flask_app import app
from flask_app.controllers.dojos_controller import Dojo
from flask_app.controllers.ninjas_controller import Ninja

if __name__ == "__main__":
    app.run(debug=True)