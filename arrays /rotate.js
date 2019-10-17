function rotateArray(array, k){
    //find length of array 
    //remove k steps from end of array
    //store value in variable 
    //push values into front of array 
    //return array 
     let rotation = array.splice((array.length - k))
     let newArray = [...rotation, ...array]
     return newArray 

}

console.log(rotateArray2([1,2,3,4,5,6,7], 3))


function rotateArray2(array, k){
  
    count = k
    i = array.length - 1

    while( 0 < count){
        element = array.pop(array[i])
        array.unshift(element)
        count--
    }

    console.log(array)
  
}

console.log(rotateArray2([1,2,3,4,5,6,7], 3))