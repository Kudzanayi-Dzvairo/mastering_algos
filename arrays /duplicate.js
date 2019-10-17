function containsDuplicate(array){
    //itereate over array
    //iterate over attay a second time 
    //see if value from first iteration matches valut from second iteration 
    //return true if so or return false 

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
        console.log(array[i], array[j])
            if(array[i] === array[j]){
                return true
            } 
        }
    }
    return false
}

let array = [1,1,1,3,3,4,3,2,4,2]

console.log(array.sort())

console.log(containsDuplicate(array))