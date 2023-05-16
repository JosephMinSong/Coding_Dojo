from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.book_model import Book
from flask_app.models.favorite_model import Favorite



# All renders/redirects
@app.route('/books')
def books():
    all_books = Book.get_all_books()
    return render_template('books.html', all_books=all_books)

@app.route('/books/<int:book_id>')
def book_show(book_id):
    return render_template('book_show.html', 
                            book = Book.get_book_by_id({'id':book_id}), 
                            all_authors = Favorite.get_all_authors_who_favorited_book({'id':book_id}), 
                            all_other_authors = Favorite.get_all_authors_who_havent_favorited_book({'id':book_id}))



# All Posts
@app.route('/books/create', methods=['POST']) 
def create_book():
    if not Book.validate_book(request.form):
        return redirect('/books')
    book_id = Book.create_book(request.form)
    return redirect(f'/books/{book_id}')

