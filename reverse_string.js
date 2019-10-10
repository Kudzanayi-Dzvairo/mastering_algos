function reverse(str){
    //split string
    //create new array 
    //loop through split string
    //insert each character into new array 
    //join new array 

    let newArray = []
    let splitArray = str.split("")

    console.log(splitArray)

    for(let i = 0; i < splitArray.length; i++){
        newArray.unshift(splitArray[i])
    }
    console.log(newArray)
    return newArray.join("")
   
}
console.log(reverse('sadza no nyama'))

function reverse2(){
    //check input 
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hmm that is not good'
    }

    const backwards = [];
    const totalItems = str.length -1;
    for (let i = totalItems; i = 0; i-- ) {
        backwards.push(str[i]);
    }

    return backwards.join('')
}

function reverse3(){
    return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('')