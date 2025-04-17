const lib = {
    books: [],
    addBook: function (title, author) {
        this.books.push({ title, author });
    },

    getBooks: function () {
        for (let index = 0; index < this.books.length; index++) {
            const element = this.books[index];
            console.log(`номер ${index + 1}: ${element.title}, ${element.author}`);
        }
    },

    getInfoByIndex: function (index) {
        if (this.books[index - 1]) {
            console.log(`Книга №${index}: "${this.books[index - 1].title}" автор: ${this.books[index - 1].author}`);
        } else {
            console.error('Нет книги с таким индексом');
        }
    },

    clearBooks: function () {
        console.log('Текущие книги:', this.books);
        this.books = [];
        console.warn('Книги очищены');
        console.log('Текущие книги:', this.books);
    },

    addMultipleBooks: function (booksArray) {
        for (let i = 0; i < booksArray.length; i++) {
            const book = booksArray[i];
            this.addBook(book.title, book.author);
        }
        console.log('Добавлено несколько книг:', booksArray);
    },

    getLastBook: function () {
        if (this.books.length > 0) {
            const lastBook = this.books[this.books.length - 1];
            console.log(`Последняя книга: "${lastBook.title}", автор: ${lastBook.author}`);
        } else {
            console.error('Нет книг в библиотеке');
        }
    },

    getFirstBook: function () {
        if (this.books.length > 0) {
            const firstBook = this.books[0];
            console.log(`Первая книга: "${firstBook.title}", автор: ${firstBook.author}`);
        } else {
            console.error('Нет книг в библиотеке');
        }
    },

    getUniqueAuthors: function () {
        const authors = [];
        for (let i = 0; i < this.books.length; i++) {
            const author = this.books[i].author;
            if (!authors.includes(author)) {
                authors.push(author);
            }
        }
        console.log('Уникальные авторы:', authors);
    },

    getAllTitles: function () {
        const titles = [];
        for (let i = 0; i < this.books.length; i++) {
            titles.push(this.books[i].title);
        }
        console.log('Все названия книг:', titles);
    },

    getBooksCountByAuthor: function (authorName) {
        let count = 0;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].author === authorName) {
                count++;
            }
        }
        console.log(`Количество книг автора "${authorName}": ${count}`);
    }
};

lib.addBook('The Great Gatsby', 'Scott F.');
lib.addBook('1984', 'G. Orwell');
lib.addBook('Animal Farm', 'G. Orwell');
lib.addMultipleBooks([
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'Brave New World', author: 'Aldous Huxley' }
]);
lib.getBooks();
lib.getInfoByIndex(2);
lib.getLastBook();
lib.getFirstBook();
lib.getUniqueAuthors();
lib.getAllTitles();
lib.getBooksCountByAuthor('G. Orwell');
lib.clearBooks();