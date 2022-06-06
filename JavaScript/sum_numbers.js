/*Let us consider this example (array written in general format):
ls = [0, 1, 3, 6, 10]
Its following parts:*/


/*ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []*/

/*The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.*/

let ls = [1,2,3,4,5];
let len = ls.length
let arr = [];

for (let i = 0; i<= len;i++){
    let total = ls.reduce((a,b)=>a+b,0);
    arr.push(total);
    ls.shift();   //remove first element
}
console.log(arr);