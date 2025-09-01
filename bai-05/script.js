var button=document.querySelector('button');
button.onclick=function(){
    alert('Hello,world!');
}
//Câu 1
var x=5;
var y=3
console.log("x+y=",x+y);
console.log("x-y=",x-y);
console.log("x*y=",x*y);
console.log("x/y=",x/y);
console.log("x%y=",x%y);
//increment
console.log("++x=",++x);
console.log("x++=",x++);
//decrement
console.log("--x=",--x);
console.log("x--=",x--);
//exponentiation
console.log("x**y=",x**y);

//Câu 2
console.log(2==2);
console.log(2!=='2');
//Câu 3
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(!true);
//Câu 4
console.log("hello"+"world");
var a="Jscript";
a +=" tutorial";
console.log(a);
//Câu 5
var value1="one";
var value2="two";
console.log("Giá trị đầu của value1 là:",value1);
console.log("Giá trị đầu của value2 là:",value2);

var value3=value1;
value1=value2;
value2=value3;
console.log("Giá trị mới của value1 là:",value1);
console.log("Giá trị mới của value2 là:",value2);

//Câu 6
//Câu 7
function palindrome(str){
    const cleanStr=str.toLowerCase().replace(/[^a-z0-9]/g,"");
    const reverseStr=str.split("").reverse().join("");
    console.log("Chuỗi sau khi làm sạch là:",cleanStr);
    console.log("Chuỗi đảo ngược là:",reverseStr);
    return cleanStr==reverseStr;
}
console.log(palindrome("civic"));
console.log(palindrome("hello"));

//Câu 8
//Câu 9
//Câu ngoài
function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return true;
}
let randomNum=Math.floor(Math.random()*100)+1;
console.log("Số ngẫu nhiên:",randomNum);
console.log("Số này là số nguyên tố:",isPrime(randomNum));

var theName="  28Tech  ";




