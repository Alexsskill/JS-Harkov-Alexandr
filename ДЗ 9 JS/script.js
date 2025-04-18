class LibraryItem {
    constructor(year, author, title) {
        this.year = year;
        this.author = author;
        this.title = title;
    }

    displayInfo() {
        console.log(`Название: "${this.title}", Автор: ${this.author}, Год публикации: ${this.year}`);
    }
}

class Book extends LibraryItem {
    constructor(year, author, title, description) {
        super(year, author, title);
        this.description = description;
    }

    displayDescription() {
        console.log(`Краткое описание книги "${this.title}": ${this.description}`);
    }
}

class Magazine extends LibraryItem {
    constructor(year, author, title, description) {
        super(year, author, title);
        this.description = description;
    }

    displayDescription() {
        console.log(`Краткое описание журнала "${this.title}": ${this.description}`);
    }
}


const book = new Book(1997, "J.K. Rowling", "Гарри Поттер и философский камень", "Волшебная история Гарри");
book.displayInfo();
book.displayDescription();

const magazine = new Magazine(2023, "National Geographic", "Путешествия по миру", "Журнал о природе");
magazine.displayInfo();
magazine.displayDescription();