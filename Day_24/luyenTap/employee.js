/* Tạo và export class Employee */ // - Dấu # để bảo mật
export class Employee {
    // Khởi tạo đối tượng Employee
    #id
    #name
    #address

    //Constructor
    constructor(id, name, address) {
        this.#id = id
        this.#name = name
        this.#address = address
    }

    // Phương thức đặt id
    getId() {
        return this.#id
    }

    // Phương thức đặt name
    getName() {
        return this.#name
    }

    // Phương thức đặt address
    getAddress() {
        return this.#address
    }

    // Phương thức gọi name
    setName(name) {
        this.#name = name
    }

    // Phương thức gọi address
    addAddress(address) {
        this.#address = address
    }

    // Phương thức đặt chuỗi
    toString() {
        return `Employee(id: ${this.#id}, name: ${this.#name}, address: ${this.#address})`
    }
}