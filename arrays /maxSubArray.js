function maxSubArray(array){
    //keep track of current sum
    let currentSum = 0 

    //keep track of max sum
    let maxSum = 0 

    for(let i=0; i < array.length; i++){
        //store current number in a variable
        currentNum = array[i]

        //set currentSum using current number plus previous total 
        //if negative set back to zero
        currentSum = Math.max((currentSum + currentNum), 0)

        //set max sum based on current sum
        maxSum = Math.max(currentSum, maxSum) 
    }

    return maxSum
   
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))