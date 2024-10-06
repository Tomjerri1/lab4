import { Library } from '../src/library';
import { Book, IBook } from '../src/models';
import * as assert from 'assert';

describe('Library', () => {
    let library: Library<Book>;
    let book1:Book;
    let book2:Book;

    beforeEach(() => {
        library = new Library<Book>();
        book1 = new Book(1,'Book1','Author1', 2022, true);
        book2 = new Book(2,'Book2','Author1', 2022, true);
    });
    it('should return the list of books', () => {
        library.addItem(book1);
        assert.equal(library.getItems().length, 1);
    });
    it('should add a book to the library', () => {
        library.addItem(book1);
        assert.deepEqual(library.getItems().find(book => book.title === 'Book1'),book1);
    });
    it('should remove a book from the library', () => {
        library.addItem(book1);
        library.removeItem(book1);
        assert.equal(library.getItems().findIndex(book => book.title === 'Book1'), -1);
    });
});