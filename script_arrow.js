// Arrow function: Syntax: var functionName = (params)=>{..code};

// Quest:1 Print the odd number in array
var number =[1,2,3,4,5,6,7];
// Arrow Function Declaration and process
var odd = (a)=>{
    for(i=0;i<a.length;i++)
    {
      if(a[i]%2 !==0)
      {
          console.log(a[i],"odd number in array");
      }
    }
};
odd(number);

// Quest:2 Convert all the string in title caps in string array
var stingArray = ["cat","dog","elePhant","tIGer","lion"];
var array=[];
// Arrow Function Declaration and process
var upperCase=(a)=>{
    for(i=0;i<a.length;i++)
    {
        array[i] =  a[i].charAt(0).toUpperCase(0)+a[i].substr(1).toLowerCase();
        
    }
    console.log(array);
};
upperCase(stingArray);

// Quest:3 Calculate the sum of the array
var number =[1,2,3,4,5];
var sum=0;
var sumFunc = (a)=>{
    for(i=0;i<a.length;i++)
    {
        sum += number[i];
        // return sum;
    }
    console.log(sum);
};
sumFunc(number);

// Quest:4 Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10,11];

var primeNum = (a)=>{
 // To parse the array value
 for(var i=0;i<a.length;i++)  
 {
  let count =0;
  // To parse upto the array element value
  for(var j=1;j<=a[i];j++)
  {
      if(numArray[i]%j ==0)
      {
          count ++;
      }
  }

  if(count==2)
  {
      // return a[i];
      console.log(a[i],"is a prime number");
  }
  
 }
};
primeNum(numArray);

// Quest:5 Return all the palindromes in an array
var string =["mom","dad","son","madam","hiii","52525","mother"];
// var reverse;
var stringReverse= (str)=>{
    for(i=0;i<str.length;i++)
    {
    // stringReverse(string[i]);
    var reverseString = str[i].split("").reverse().join("");
    // console.log(reverseString);exit;
    if(str[i]===reverseString)
    {
        console.log(str[i],"is a Palindrome");
    }
}
};
stringReverse(string);
