```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

```Solution-1```


function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6).join("")}`
  }




  ```Solution-2```

  let phonenumber=prompt("Enter a number")
  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format
  }
console.log(createPhoneNumber(phonenumber));