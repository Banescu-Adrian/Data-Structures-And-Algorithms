//  Queue

// First in, first out

function Queue () {
    collection = []

    this.print = function () {
        console.log(collection)
    }

    this.enqueue = function (element) {
        collection.push(element)

        return element
    }

    this.dequeue = function () {
        return collection.shift()
    }

    this.front = function () {
        return collection[0]
    }

    this.size = function () {
        return collection.length
    }

    this.isEmpty = function () {
        return (collection.length === 0)
    }
}

let q = new Queue()
console.log("Enqueue: " + q.enqueue("a"))
console.log("Enqueue: " + q.enqueue("b"))
console.log("Print: ")
q.print()
console.log("Dequeue: " + q.dequeue())
console.log("Enqueue: " + q.enqueue("c"))
console.log("Print: ")
q.print()
console.log("First item: " + q.front())
console.log("Size: " + q.size())
console.log("Dequeue: " + q.dequeue())
console.log("Dequeue: " + q.dequeue())
console.log("Size: " + q.size())

function PriorityQueue () {
    var collection = []
    this.printCollection = function () {
        console.log(collection)
    }

    this.enqueue = function (element) {
        if (this.isEmpty()){
            collection.push(element)
        } else {
            let added = false
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i,0,element)
                    added = true
                    break
                }
            }
            if (!added) {
                collection.push(element)
            }
        }
    }

    this.dequeue = function () {
        let value = collection.shift()
        return value[0]
    }

    this.front = function () {
        return collection[0]
    }

    this.size = function () {
        return collection.length
    }

    this.isEmpty = function () {
        return (collection.length === 0)
    }
}

console.log(" ")
let pq = new PriorityQueue()
pq.enqueue(['name', 2])
pq.enqueue(['surname', 1])
pq.enqueue(['address', 3])
pq.printCollection()
pq.dequeue()
pq.front()
pq.printCollection()