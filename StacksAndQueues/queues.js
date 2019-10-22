class Node{
    constructor(){
        this.value = value
        this.next = null
    }
}

class Queue(){
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }

    peek(){
        return this.first
    }

    enqueue(){
        const newNode = newNode(value);
        if (this.length === 0){
            this.first = newNode;
            this.last = new Node;
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue(){
        if(!this.first){
            return null
        }
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.length--
        return this
    }

}