import {Base, BaseI} from "./base";

interface BookI extends BaseI {
    getAuthor: () => string;
    getAvailable: () => boolean;
    setAuthor: (author: string) => void;
    setAvailable: (available: boolean) => void;
}

class Book extends Base implements  BookI {
    private author: string;
    private available: boolean;

    constructor(id: number, name: string, author: string, available: boolean) {
        super(id, name);
        this.author = author;
        this.available = available;
    }

    //Getter
    getAuthor(): string {
        return this.author;
    }
    getAvailable(): boolean {
        return this.available;
    }

    //Setter
    setAuthor(name: string): void {
        this.author = name;
    }
    setAvailable(available: boolean): void {
        this.available = available;
    }


    //toString
    toString() {
        return `Reader {
            id = ${this.getId()}
            name = ${this.getName()}
            available = ${this.getAvailable()}
        }`
    }
}