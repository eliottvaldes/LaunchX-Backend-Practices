/**
 * Create a class to implement a stack
 * remember the stack is LIFO
 * class must include the following methods:
 * push, pop, peek, length
 * * do not use the built in array methods
 */

// define the class using PascalCase
class Stack {
    // create constructor
    constructor() {
        // create an array to hold the stack
        this.stack = []
        this.counter = 0
    }

    // create push method
    push(item) {
        // push the item to the stack
        this.stack[this.counter] = item
        this.counter++

        return this.stack
    }

    // create pop method
    pop() {
        // pop the item from the stack
        if (this.counter === 0) {
            return undefined
        }

        this.counter--
        let item = this.stack[this.counter]
        delete this.stack[this.counter]
        return item

    }

    // create peek method
    peek() {
        // return the last item in the stack
        return this.stack[this.counter - 1]
    }

    // create length method
    length() {
        return this.counter
    }

    // create method to print
    print() {
        return this.stack
    }

}
