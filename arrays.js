const strings = ['a','b','c','d'];
//4

strings[2]

//push 
strings.push('e')//O(1)

//pop
strings.pop()
strings.pop()//O(1)


//unshift
strings.unshift('x')//O(n)

//splice
// strings.splice(2, 0, 'alien') //O(n)

// console.log(strings)

// const a = [1, 2, 3]
// const b = [1,2,3]
// const c = '1,2,3'

// console.log(a == c)
// console.log(b == c)
// console.log(a == b)

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
        }

    pop() {
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index){
        const item = this.data[index]
        this.shiftItems(index)
    }

    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length --
    }
}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('me')
newArray.pop()

console.log(newArray)

