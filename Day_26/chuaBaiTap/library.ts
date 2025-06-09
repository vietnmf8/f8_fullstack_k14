interface LibraryI {
    getBooks: () => number[];
    getReaders: () => number[];

    setBooks: (books: number[]) => void;
    setReaders: (readers: number[]) => void;
}

class Library implements LibraryI {
    private books: number[];
    private readers: number[];

    constructor(books: number[] = [], readers: number[] = []) {
        this.books = books;
        this.readers = readers;
    }

    //Getter
    getBooks(): number[] {
        return this.books;
    }
    getReaders(): number[] {
        return this.readers;
    }

    //Setter
    setBooks(books: number[]): void {
        this.books = books;
    }
    setReaders(readers: number[]): void {
        this.readers = readers;
    }
}