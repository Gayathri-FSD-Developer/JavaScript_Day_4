// Immediately Invoked function execution (IIFE):

// syntax:
// (function funcName(params){..code})(arguments);

// Quest:1 Print the odd number in array
var number =[1,2,3,4,5,6,7];
// console.log(number);
(function odd(a){
    
    for(i=0;i<a.length;i++)
    {
      if(a[i]%2 !==0)
      {
          console.log(a[i],"odd number in array");
      }
    }
})(number);

// Quest:2 Convert all the string in title caps in string array
var stingArray = ["cat","dog","elephant","tiger","lion"];
var array=[];
(function upperCase(a){
    for(i=0;i<a.length;i++)
    {
        array[i] = a[i].toUpperCase();
        
    }
    console.log(array);
})(stingArray);

// Quest:3 Calculate the sum of the array
var number =[1,2,3,4,5];
var sum=0;
(function sumFunc(a){
    for(i=0;i<a.length;i++)
    {
        sum += number[i];
        // return sum;
    }
    console.log(sum);
})(number);

// Quest:4 Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10,11];
(function primeNum(a){
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
})(numArray);

// Quest:5 Return all the palindromes in an array
var string =["mom","dad","son","madam","hiii","52525"];
(function stringReverse(str)
{
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
})(string);

// Quest:6 Return the median of the two sorted array of same size

let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];

(function sorting(array1,array2){
    // arry concat used to merge the array. arr.sort((a,b)=>a-b)
    // is check the a-b value and negative so sort it before 
    let mergedArray = array1.concat(array2).sort((a, b) => a - b);
    console.log(mergedArray);
    var length = mergedArray.length;
    // console.log(length,"length");
    let medianIndex = Math.floor(length / 2);
    // console.log(medianIndex);
    
    if(length%2===0)
    {
    //   medianIndex-1 bcz index stars with 0, so -1 from length
       console.log ((mergedArray[(medianIndex -1)]+mergedArray[medianIndex])/2);
    }
    else
    {
        // console.log("lll");
      console.log (mergedArray[medianIndex]);   
    }
   
})(arr1,arr2);

// Quest:7 Remove the duplicate values in the array

const array = [1,2,3,2,3,5,6,4,4];

(function duplicate(arr){

    var newArray =[];
    // To get only array values
    for(var i of arr)
    {
        // indexOf will check the duplicate in menioned array(-1) means return value of no duplicate
       if(newArray.indexOf(i) === -1)
       {
           newArray.push(i);
       }
    }
    console.log(newArray);
})(array);

// Quest:8 Rotate an array by k times
var array = [1,2,3,4,5,8];
var k= 5;

(function arrayReverse(arr,k){

    for(i=0;i<k;i++)
    {
        arr.unshift(arr.pop());
    }
    console.log(arr);
})(array,k);
