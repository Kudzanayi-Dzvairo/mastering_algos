const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt']
const large = new Array(100).fill('nemo')

function findNemo(array){
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo') {
            console.log("Found Nemo")
            break;
        }
    }
}

console.log(findNemo(nemo))

function compressAllBoxes(boxes){
    boxes.forEach(function(item){
        console.log(item)
    })
}

const compressAllBoxes1 = boxes => {
    boxes.forEach(box => console.log(box))
}

function compressFirstBox(boxes){
    console.log(boxes[0])
}

const boxes = [0,1,2,3,4,5]
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]) //0(1)
    console.log(boxes[1]) //0(2)
}

console.log(logFirstTwoBoxes(boxes)) //0(1)


//Calculating  BIg O
function funChallenge(input){
    let a = 10 //0(1)
    a = 50 + 3//0(1)

    for(let i = 0; i < input.length; i++ ){ //0(n)
        anotherFunction() //0(n)
        let stranger = true; //0(n)
        a++; //0(n)
    }
    return a //0(1)
}

// Big 0(3 + 4n) 

function anotherFunChallenge(input) {
    let a = 5; //0(1)
    let b = 10; //0(1)
    let c = 50; //0(1)
    for(let i = 0; i < input; i++ ) { //0(n)
        let x = i + 1; //0(n)
        let y = i + 2; //0(n)
        let z = i + 3; //0(n)
    }
    for(let j = 0; j < input; j++){ //0(n)
        let p = j * 2; //0(n)
        let q = j* 2; //0(n)
    }
    let whoAmI = "I don't know"//0(1)
}

//Big 0(4 + 5n)

//Log all pairs of array 
const letters = ['a','b','c','d','e'];

function logAllPairsOfArray(array){
    for(let i=0; i <array.length; i++){
        for(let j=0; j < array.length; j++){
            console.log(array[i], array[j])
        }
    }
}

// console.log(logAllPairsOfArray(letters))

function boooo(n){
    for(let i =0, i < n.length; i++){
        console.log('boooo!')
    }
}

boooo({1,2,3,4}) //O(1)

function arrayOFHiNTimes() {
    let hiArray = [];
    for(let i =0; i < n.length; i++){
        hiArray[i] = 'hi'
    }
    return hiArray //O(n)
}