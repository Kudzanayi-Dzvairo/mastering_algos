//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter1(input){

    for(let i = 0; i < input.length; i++){
        for(let j = i + 1; j < input.length; j++){
            if(input[i] === input[j]){
                console.log(input[i], input[j])
                return input[i]
            } 
        }
    }
    return undefined
}

function firstRecurringCharacter2(input){
    //create an empty hash
    //iterate over array 
    //create count 
    //add letter to hash 
    //if count reaches two return key 
    //else return value 
    //return first value with key of 2

    let hash = {}
     
    for(let i = 0; i < input.length; i++){
        
        if(!hash[input[i]]){
            hash[input[i]] += 1
        } else {
            hash[input[i]] = 1
        }

        for(let number in hash){
            if(hash[number] === 2){
                return hash[number]
            }
        }
        
    }
  

    return undefined
}

function firstRecurringCharacter3(input){
    let map = {}

    for(let i=0; i < input.length; i++){
        if(map[input[i]]){
            return input[i]
        }else{
            map[input[i]] = 7
        }
    }
    return undefined
}


console.log(firstRecurringCharacter3([2,1,1,2,3,5,1,2,4]))