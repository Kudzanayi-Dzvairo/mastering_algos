function moveZeroes(nums){
          
    //loop over array 
    //check if item at index is zero
    //if zero remove element
    // push a zero to end of array 
     
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
           let zero = nums.splice(i, 1 )
           let zero2 = zero.pop()
           nums.push(zero2)
        }
        
    }
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))