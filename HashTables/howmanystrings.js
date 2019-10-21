// given a string of letters find out how many times you can spell balloon out of it

let balloon = "balloon"

let string = "balloonballoon" // 2
let string2 = "ballballoonoon" // 2
let string3 = "nooball" // 1

const makeHash = (word) => {
  let hash = {}

  for(let i = 0; i < word.length; i++) {
    if(hash[word[i]]) {
      hash[word[i]] += 1
    } else {
      hash[word[i]] = 1
    }
  }

  return hash
}


let balloonCount = (balloon, string) => {

  let balloonHash = makeHash(balloon)
  let balloonString = makeHash(string)

  
  console.log(balloonHash)
  console.log(balloonString)


  for(let i = 0; i < string.length; i++){
    if(!balloonHash[string[i]]){
      balloonHash[string[i]] = 1
    } else {
      balloonHash[string[i]] += 1
     } 
  }

  for(let i = 0; i < balloon.length; i++){
    if(!balloonString[balloon[i]]){
      balloonString[balloon[i]] = 1
    }else{
      balloonString[balloon[i]] += 1
    }
  }


for(var letter in balloonHash){
  if(balloonHash[letter] === "b")
  count = balloonHash[letter]
  return count 
}

}

balloonCount(balloon, string)
balloonCount(balloon, string2)
balloonCount(balloon, string3)



