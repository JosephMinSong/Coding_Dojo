from flask_app import app
from flask import redirect, request
from flask_app.models.author_model import Author
from flask_app.models.favorite_model import Favorite

@app.route('/authors/add_favorite', methods=['POST'])
def add_authors_favorite():

    Favorite.create_favorite_relationship(request.form)
    author_id = request.form['author_id']

    return redirect(f'/authors/{author_id}')

@app.route('/books/add_favorite', methods=['POST'])
def add_books_favorite():
    Favorite.create_favorite_relationship(request.form)
    book_id = request.form['book_id']
    return redirect(f'/books/{book_id}')

@app.route('/favorites/remove/<int:book_id>')
def remove_book(book_id):
    data = {'id': book_id}
    Favorite.remove_favorite_from_user(data)
    return redirect('/authors')