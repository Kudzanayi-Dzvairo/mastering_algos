function reverse(str){
    //split string
    //create new array 
    //loop through split string
    //insert each character into new array 

    let newArray = []
    let splitArray = str.split("")

    console.log(splitArray)

    for(let i = 0; i < splitArray.length; i++){
        newArray.unshift(splitArray[i])
    }

    return newArray.join("")
   
}

console.log(reverse('sadza no nyama'))

var sadza = "sadza"

