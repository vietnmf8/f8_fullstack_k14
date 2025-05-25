import {Person} from "./person.js";

// Male extend (kế thừa) từ Person: Giống như đàn ông thì có thuộc tính tu con người
export class Male extends Person {
    #girlFriend

    constructor(name, age, girlFriend) {
        super(name, age);
        this.#girlFriend = girlFriend
    }

    getGirlFriend() {
        return this.#girlFriend;
    }

    setGirlFriend(girlFriend) {
        this.#girlFriend = girlFriend;
    }
}