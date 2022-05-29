let num = [2,1,10];
let newnum = num.sort((a,b)=>b-a);
let sum = 0;
for(let i = 0; i<newnum.length-1; i++){
  sum += (newnum[i] - newnum[i+1]);
}
console.log(sum);