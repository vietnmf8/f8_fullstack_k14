import {Base, BaseI} from "./base";

interface ReaderI extends BaseI {
    getBorrowBooks: () => number[];
    setBorrowBooks: (borrowBooks: number[]) => void;
}

class Reader extends Base implements ReaderI {
    private borrowBooks: number[]

    constructor(id: number, name: string, borrow_books: number[]) {
        super(id, name);
        this.borrowBooks = borrow_books;
    }

    //Getter
    getBorrowBooks(): number[] {
        return this.borrowBooks;
    }

    //Setter
    setBorrowBooks(borrowBooks: number[]): void {
        this.borrowBooks = borrowBooks;
    }

    //toString
    toString() {
        return `Reader {
            id = ${this.getId()}
            name = ${this.getName()}
            BorrowBooks = ${this.getBorrowBooks()}
        }`
    }
}