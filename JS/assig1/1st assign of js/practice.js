// var myNum=10;
// var myStr="Hello World";
// var myBool=true;

// console.log(myNum, typeof myNum);
// console.log(myStr ,typeof myStr);
// console.log(myBool ,typeof myBool);


// myNum = '10';
// console.log(myNum, typeof myNum);

var myStr="Hello World";
console.log(myStr.length);
console.log(myStr.indexOf('ell'));
console.log(myStr.indexOf('www'));
console.log(myStr.indexOf('d'));
console.log(myStr[0], myStr[myStr.length - 1]);
console.log(myStr.concat('elsa'),myStr);
console.log(myStr.split('ll'));
console.log(myStr.toUpperCase());
console.log(myStr.substr(1, 5));
var a;
console.log(a);
var a=null;
console.log(a);
var array = [1, 2, 3, 'four', true, [1, 2, 3]];
console.log(array[2]);
console.log(array.slice(1, 2), array);
console.log(array.splice(2, 3), array);


var obj = {
    num: 10,
    key: 'value',
    isTrue: true,
    arr: [1, 2, 3, 4, 5]
};

console.log(obj.num, obj['key'], obj.val);

obj.isTrue = 1;
obj.val = { newKey: 'newVal' };
console.log(obj.val.newKey);

function getSum(a,b){
    return a+b;
}
getSum(1,3);

var getSum = function(a, b) {
    return a + b;
}

getSum(1, 3);

