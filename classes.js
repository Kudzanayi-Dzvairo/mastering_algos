//reference type
var object1 = { value: 10}
var object2 = object1
var object3= {value: 10}
object1.value = 15
console.log(object2)

//context vs scope
function b() {
    let a = 4;
    console.log(this)
}

const object4 = {
    a: function() {
        console.log(this)
    }
}

console.log(object4.a())

//instatiation
 class Player{
     constructor(name, type){
         this.name = name
         this.type = type
         console.log('player', this)
     }
     
     introduce() {
         console.log(`Hi I am ${this.name} and I am a ${this.type}`)
     }
 }

 class Wizard extends Player {
     constructor(name, type) {
         super(name, type)
         console.log('wizard', this)
     }
     play() {
         
         console.log(`Weeeee I'm a ${this.type}`)
     }
 }

 const wizard = new Wizard('Gandalf', 'Boss')
 const wizard1 = new Wizard('Harry', 'Battymon')

 console.log(wizard1.introduce())