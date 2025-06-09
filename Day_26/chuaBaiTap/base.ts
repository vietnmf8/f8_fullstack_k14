export interface BaseI {
    getId: () => number;
    getName: () => string;
    setName: (name: string) => void;
    toString: () => string;
}

export abstract class Base implements BaseI {
    private readonly id: number;
    private name: string;

    protected constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    //Getter
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }

    //Setter
    setName(name: string): void {
        this.name = name;
    }

    //Phuong thuc truu tuong
    abstract toString()
}

//base la 1 instance
// Base la mot class

//Private -> chi class do goi dc
//Protected -> Class do va cac class ke thua goi dc
//Public -> coi chuong