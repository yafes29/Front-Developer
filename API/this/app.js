/*// THİS

 console.log(this);
console.log(this.location)
 console.log(this.location.href)

 console.log(this === window)

 Function Declaration

function func1(){
    this.name = "ALP"
    console.log(this)
}

 Function Expression

const func2 = function(){
    console.log(this)
}

console.log(name)
func1();
func2();*/

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// const person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id         : 5566,
//     myFunction : function() {
//       return this;
//     }
//   };


// const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }
  
//   // Return "John Doe":
//   person1.fullName.call(person2);


// // Regular Function:
// hello = function() {
//     document.getElementById("demo").innerHTML += this;
//   }
  
//   // The window object calls the function:
//   window.addEventListener("load", hello);
  
//   // A button object calls the function:
//   document.getElementById("btn").addEventListener("click", hello);

// // Arrow Function:
// hello = () => {
//     document.getElementById("demo").innerHTML += this;
//   }
  
//   // The window object calls the function:
//   window.addEventListener("load", hello);
  
//   // A button object calls the function:
//   document.getElementById("btn").addEventListener("click", hello);


const a = 10;
const b = 20;

console.log(a+b);