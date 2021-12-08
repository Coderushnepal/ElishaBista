// Ques.3
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]] 
let obj=
{
     a: 1,
      b: 2  
} 
let arr =Object.entries(obj);

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
let js =
{
    shrimp: 15, tots: 12  
}

 let arr1 =Object.entries(js);

//  toArray({}) ➞ []
let empty ={};
let arr2 =Object.entries(empty);


// Ques.1
//  Write a function to render the following pattern in the console:
// * * * * *
// * * * *
// * * *
// * *
// *

// The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.

function render(x){
    for(let i=x; i>0; i--){
      let j=i, str = "*", string = "";
      while(j>0){      
        string+=str;
        j--;
      }
      console.log(string);
    }
  }
  render(5); 
  let arr1 =Object.entries(js);
  
 

// Ques.2
//  censor("The code is fourty") ➞ "The code is ******"
// censor("Two plus three is five") ➞ "Two plus ***** is five"
// censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
function censor(str) {
  let words =str.split(" ");
  for( let i=0; i<words.length; i++){
    if(words[i].length>4){
      words[i]='*'.repeat(words[i].length);
    }
  }
  
  console.log(words.join(' '));
}
censor(" This is coding");




// Ques.4
function identicalFilter(arr){
  let k=0;
  let identical =[];
  for(let i=0; i<arr.length; i++){
    let repetation= new Set(arr[i]);
    if(repetation.size===1){
      identical[k++] = arr[i];  
    }
  }
  return identical;
}
console.log(identicalFilter(["888", "123","999"]));

// Ques.5
function keysAndValues(data){
  var keys = Object.keys(data),
      values = keys.map(function (key) {
          return data[key];
      });
  
  return [keys, values]; 
}

console.log(keysAndValues({k: 11, l: 12, m: 13}));