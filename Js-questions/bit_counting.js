/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case*/

//! SOLUTİON-1
/*var countBits = function(n) {
    n = n.toString(2)
    let counter = 0;
    for(let i=0; i<n.length; i++){
      if (n[i] == 1){
          counter+=1
      }
      
    }
    return counter
  };*/

  //! SOLUTİON-2

  var number=123;

  var binary=number.toString(2)

  var bit=number.toString(2).split("0").join("").length
  console.log(binary);
  console.log(bit);

  //!SOLUTİON-3

  var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length;
  };

//! SOLUTİON-4

  var countBits = function(n)
{
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
};