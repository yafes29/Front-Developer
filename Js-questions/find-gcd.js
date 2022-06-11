//GCD//
let gcd;
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

if (number1<number2){
    for (let i = 1; i <= number1; i++) {

    if( number1 % i == 0 && number2 % i == 0) {
        gcd = i;
        console.log(gcd)
    }
}
    
}else{
    alert("number1<number2 olmalıdır!!!")
}