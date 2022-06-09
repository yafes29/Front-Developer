let numbers=+prompt("Enter your a number:")

let count=0

for(i=2;i<numbers;i++){
    if(numbers%i==0){
        count++
    }
if(count==0){
    console.log(`${numbers} is a prime number `)
}
else{
    console.log(`${numbers} is not a prime number `)
}    
}
