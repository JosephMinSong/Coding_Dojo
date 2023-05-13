from flask_app import app
from flask import render_template, redirect, session, request, flash
from flask_app.models.users_model import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)