export class Person {
    //Gọi biến
    #name;
    #age;

    // Khởi tạo một obj Person
    constructor(name, age) {
        this.#name = name;   // Khởi tạo thuộc tính name
        this.#age = age;     // Khởi tạo thuộc tính age
        // this.eat = function () {
        //     console.log('eat')
        // }
        // this.eat()
    }

    eat() {
        console.log('eat')
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    setName(name) {
        this.#name = name;
    }

    setAge(age) {
        this.#age = age;
    }
}