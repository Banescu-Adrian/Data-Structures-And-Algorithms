// Sets
// No duplicated values

// goal: check for presence of an item

function mySet() {

    // this let will hold the set
    let collection = []

    // check for presence of an element
    this.has = function (element) {
        return (collection.indexOf(element) !== -1)
    }

    // all the values of the set
    this.values = function () {
        return collection
    }

    // add an element
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element)
            return true
        }
        return false
    }

    // remove an element
    this.remove = function (element) {
        if (!this.has(element)) {
            index = collection.indexOf(element)
            collection.splice(index, 1)
            return true
        }
        return false
    }

    // this method will return the size of the collection
    this.size = function () {
        return collection.length
    }

    // this method will return the union of the sets
    this.union = function (otherSet) {
        let unionSet = new mySet()
        let firstSet = this.values()
        let secondSet = otherSet.values()

        firstSet.forEach(function(e) {
            unionSet.add(e)
        })

        secondSet.forEach(function(e){
            unionSet.add(e)
        })

        return unionSet
    }

    // this method will return the intersectiton of the sets
    this.intersection = function(otherSet) {
        let intersectionSet = new mySet()
        let firstSet = this.values()

        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })

        return intersectionSet
    }

    // difference of two sets
    this.difference = function(otherSet) {
        let differenceSet = new mySet()
        let firstSet = this.values()
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })

        return differenceSet
    }

    // subset
    this.subset = function(otherSet) {
        let firstSet = this.values()
        return firstSet.every(function(value) {
            return otherSet.has(value)
        })
    }
}

let setA = new mySet()
let setB = new mySet()

setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("a")

console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setA.difference(setB).values())
console.log(setA.union(setB).values())