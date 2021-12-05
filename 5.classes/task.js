class PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    set state(setState) {
        if(setState < 0){
            this._state = 0;
        } else if(setState > 100) {
            this._state = 100;
        } else {
            this._state = setState;
        }
    }
    
    get state() {
        return this._state;
    }
}

PrintEditionItem.prototype.fix = function fix() {
    this.state*= 1.5; 
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"; 
        
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
}

Library.prototype.addBook = function addBook(obj) {
    if(obj.state > 30) {
        this.books.push(obj);
    }
}

Library.prototype.findBookBy = function findBookBy(type, value) {
    let result;
    this.books.forEach(element => {
        if(element[type] === value) {
            result = element;
        }
        else {
            result = null;
        }
    });
    return result;
}


Library.prototype.giveBookByName = function giveBookByName(bookName) {
    let result;
    this.books.forEach((element,idx) => {
        if(element.name === bookName) {
            this.books.splice(idx, 1);
            result = element;
        }
        else {
            result = null;
        }
    });
    return result;
}