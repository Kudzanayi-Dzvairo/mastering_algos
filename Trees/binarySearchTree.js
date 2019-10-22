class Node{
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        //create a new node
        const newNode = new Node(Value)
        //check if root node exists
        if(this.root === null){
            //if no root node make new node root
            this.root = newNode
        }else{
            //assign root to variable
           let currentNode = this.root
           while(true){
               
               if(value < currentNode.value){
                   //if value less than current node go left
                   if(!currentNode.left){
                       //if no left node exists set left node
                       currentNode.left = newNode
                       return this;
                   }
                   //set currentnode to current.left and continue looping
                   currentNode = currentNode.left
               } else {
                   //right
                   //check if right node exists
                   if(!currentNode.right){
                       //if not set new node to right
                       currentNode.right = newNode
                       return this
                   }
                   //or current node becomes right node and we continue looping 
                   currentNode = currentNode.right
               }
           }
        }
    }


    lookup(value){
        if(!this.root){
            return false
        }

        let currentNode = this.root;
        while(currentNode){
            // check if value is smaller than current node
            if(value < currentNode.value){
                //go left
                currentNode = currentNode.left
            //check if its larger
            } else if(value > currentNode.right){
                //go right
                currentNode = currentNode.right
            //if its the value 
            } else if(currentNode.value = value){
                //retunr node
                return currentNode
            }
        }
        return false
    }
}