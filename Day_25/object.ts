interface Master {
    // id: number;
    // name: string;
}

interface PersonI extends Master {
    getId(): number;
    getName: () => string;
    setName: (name: string) => void;
    // eat: () => void;
}
// Input: () -> Khong truyen vao gi
// Output: void === undefine -> Khong tra ra gi

class PersonEntity implements PersonI {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    toMyString() {
        return `PersonEntity (id = ${this.getId()}): ${this.getName()})`;
    }
}


const personEntity: PersonEntity = new PersonEntity(1, 'Viet')
console.log(personEntity);