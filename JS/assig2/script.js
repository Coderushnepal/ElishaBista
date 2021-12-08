clearInterval// /Ques no.1/ 

var nameList = `Neeta sapkota
Neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;

nameList=nameList.split('\n');
function result(array){
    return array.map(function(value,index)
    {
        var obj={};
        console.log(value);
        var name=value.split(' ');
        var fname=name[0].charAt(0).toUpperCase()+name[0].slice(1)
        var lname=name[1].charAt(0).toUpperCase()+name[1].slice(1)
        obj['id']=index+1;
        obj['firstName']=fname;
        obj['lastName']=lname;
        return obj;
        });
};
console.log(result(nameList));
console.log('')

// Ques.2 soln
function Counts(array, letter) {
	var getArrayFromQ1 = result(array);
	var equalTo = getArrayFromQ1.filter(function(value) {
		return value.firstName[0] == letter.toUpperCase();
	});
	var startWith = equalTo.length;
	var startWithout = getArrayFromQ1.length - startWith;
	return letter + ': ' + startWith + ' and ' + startWithout;
};


console.log(Counts(nameList, 's'));
console.log(Counts(nameList, 'a'));

// Convert the array of the result in Question 1, in following format
//3
var res = function(array) {
	var getArrayFromQ1 = result(array);
	var organized = getArrayFromQ1.reduce(function(acc, value, index) {
		delete value.id;
		acc[index + 1] = value;
		return acc;
	}, {});
	return organized;
};

console.log(res(nameList));
console.log('\n\n')

//Write a function that returns the longest sequence of consecutive zeroes in a binary string.
function longestZero(str) {
    return str.split("1").sort().pop().length;
  }
  
  console.log(longestZero("01100001011000"));
  
  //Create a function that takes a string and replaces the vowels with another character.
  //a = 1, e = 2, i = 3, o = 4, u = 5
  
  function LetterChanges(text) {
    var str = text.split("");
    for (var i = 0; i < text.length; i++) {
      switch (str[i]) {
        case "a":
          str[i] = 1;
          break;
        case "e":
          str[i] = 2;
          break;
        case "i":
          str[i] = 3;
          break;
        case "o":
          str[i] = 4;
          break;
        case "u":
          str[i] = 5;
          break;
        default:
          str[i];
      }
    }
    return str.join("");
  }
  
  console.log(LetterChanges("Elisha"));
  console.log(LetterChanges("Bista"));
  console.log(LetterChanges("Neha"));

