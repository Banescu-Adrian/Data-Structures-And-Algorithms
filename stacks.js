//  Stacks!
//  Functions: push, pop, peek, length

//  Goal check if word is a palindrome

//  Array method

let letters = []

let word = "racecar"

let rword = ""

//  Put letters of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
}

//  Pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    rword += letters.pop()
}

if (rword === word) {
    console.log( word + " is a palindrome.")
} else {
    console.log(word + " is not a palindrome")
}

console.log("Stack implementation \n------------------------------------")
//  Implementation of a Stack
let Stack = function () {
    this.count = 0
    this.storage = {}

    // Add value at the end of the stack
    this.push = function(value) {
        console.log("Add to stack: " + value)
        this.storage[this.count] = value
        this.count++
    }

    // Pop an item off at the the end of the stack
    this.pop = function() {
        console.log("Pop the last item")
        if (this.count === 0) {
            return undefined
        }

        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size = function() {
        console.log("Size of stack")
        return this.count
    }

    // Return the value at the end of the stack
    this.peek = function() {
        console.log("Last item is: ")
        return this.storage[this.count - 1]
    }
}

let myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
myStack.push("This is a string")
console.log(myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
