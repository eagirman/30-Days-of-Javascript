// Exercise: Level1
//1
let challenge;

challenge = "30 Days Of JavaScript";

//2
console.log(challenge);

//3
console.log(challenge.length);

//4
console.log(challenge.toUpperCase());

//5
console.log(challenge.toLowerCase());

//6
console.log(challenge.substr(3));

//7
console.log(challenge.substr(0, 2));

//8
let string = '30 Days Of JavaScript'
console.log(string.includes('Days'));
console.log(string.includes('days'));

//9
console.log(challenge.split());


//10
console.log(challenge.split(" "));

//11
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","));

//12
console.log(challenge.replace("JavaScript","Python"));

//13
console.log(challenge.charAt(15));

//14
challenge = "30 Days Of JavaScript";
console.log(challenge.charCodeAt(12));

//15
console.log(challenge.indexOf("a"));

//16
console.log(challenge.lastIndexOf("a"));

//17
challenge ="You cannot end a sentence with because because because is a conjunction";
console.log(challenge.indexOf("because"));

//18
console.log(challenge.lastIndexOf("because"));

//19
console.log(challenge.search("because"));

//20
challenge="   30 Days Of JavaScript   "
console.log(challenge);
console.log(challenge.trim(" "));

//21
challenge="30 Days Of JavaScript"
console.log(challenge.startsWith("3"));

//22
console.log(challenge.endsWith("t"));

//23
console.log(challenge.match("a"));

//24
let s1 ="30 Days of"
console.log(s1.concat(" JavaScript"));

//25
console.log(challenge.repeat(" ", 2));

