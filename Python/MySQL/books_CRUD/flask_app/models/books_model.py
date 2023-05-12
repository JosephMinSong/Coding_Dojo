from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import authors_model

database = 'books'

class Books:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all_books(cls):
        query = """SELECT * FROM books"""
        result = connectToMySQL(database).query_db(query)

        all_books = []
        for book in result:
            all_books.append(cls(book))
        return all_books
    
    @classmethod
    def get_one_book_with_many_favorites(cls, book_id):
        query = """SELECT * FROM books
                    LEFT JOIN favorites ON books.id = favorites.book_id
                    LEFT JOIN authors ON favorites.author_id = authors.id
                    WHERE book_id = %(id)s"""
        
        result = connectToMySQL(database).query_db(query, {'id':book_id})
        book = cls(result[0])
        for author in result:
            author_data = {**author,
                            'id':author['authors.id'],
                            'created_at': author['author.created_at'],
                            'updated_at': author['author.updated_at']}
            book.favorite.append(authors_model.Authors(author_data))
        return result

