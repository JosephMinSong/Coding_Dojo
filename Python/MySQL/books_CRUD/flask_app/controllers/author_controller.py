from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.author_model import Author
from flask_app.models.favorite_model import Favorite
from flask_app.models.book_model import Book




# All renders/redirects
@app.route('/authors')
def authors():
    all_authors = Author.get_all_authors()
    return render_template('authors.html', all_authors=all_authors)

@app.route('/authors/<int:author_id>')
def author_show(author_id):
    data = {'id' : author_id}
    author = Author.get_author_by_id(data)
    all_favorites = Favorite.get_all_favorites_for_one_author(data)
    all_books_not_favorited = Favorite.get_all_unfavorited_books(data)
    return render_template('author_show.html', author=author, all_favorites=all_favorites, all_books = all_books_not_favorited)



# All Posts
@app.route('/authors/create', methods=['POST'])
def create_author():
    if not Author.validate_new_author(request.form):
        return redirect('/authors')
    new_author = Author.create_author(request.form)
    return redirect(f'/authors/{new_author}')

