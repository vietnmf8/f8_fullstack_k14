// interface
interface Common {
    id: number;
    name: string;
    getId(): number;
    getName: () => string;

}

// Class: Book
class Book implements Common {
    id: number;
    name: string;
    private author: 'string'
    private available: boolean;

    constructor(author: 'string', available: boolean) {
        this.author = author;
        this.available = available;
    }

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }

    getAuthor(): string {
        return this.author;
    }
    getAvailable(): boolean {
        return this.available;
    }
}



// Class: Book
// class Reader implements Common {
//     id: number;
//     name: string;
//     private borrowed_books: Reader[];
//
//     constructor(borrowed_books: Reader[]) {
//         this.borrowed_books = borrowed_books;
//     }
//
//     getId(): number {
//         return this.id;
//     }
//     getName(): string {
//         return this.name;
//     }
//
//     getAuthor(): Array<string> {
//         return this.borrowed_books;
//     }
//
// }
