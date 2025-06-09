class Animal {
    eat() {
        console.log('dong vat an')
    }

    go() {
        console.log('dong vat di')
    }


    doSomething() {
        this.go()
        this.eat()
    }
}

class Cat extends Animal {
    go() {
        console.log(' con meo di')
    }
}

const cat = new Cat();
cat.doSomething()