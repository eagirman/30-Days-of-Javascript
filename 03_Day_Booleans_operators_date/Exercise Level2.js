// Exercise: Level2
//1
// let triangleheight = Number(prompt("yükseklik = "));
// let trianglebase = Number(prompt("taban alanı = "));

// console.log((triangleheight * trianglebase )/ 2);

//2
// let trianglea= Number(prompt("a = "));
// let triangleb= Number(prompt("b = "));
// let trianglec= Number(prompt("c = "));

// console.log(trianglea + triangleb + trianglec);

//3
// let rectanglea= Number(prompt("a = "));
// let rectangleb= Number(prompt("b = "));

// console.log((rectanglea + rectangleb)* 2);

//4

// let r = Number(prompt("r ="));
// console.log(2 * 3.14 * r);
// console.log(3.14 * r * r);

// //5
// let x;
// let y;

// x = 0;
// y =((2 * x) - 2)
// if(x == 0)
// 	console.log(y);

// y = 0;
// x = (y + 2) / 2;
// if(y == 0)
// 	console.log(x);
// let gradient1 = 2;
// console.log(gradient1);

// //6
// let x1 = 2, y1 = 2;
// let x2 = 6, y2 = 10;
// let gradient2 = (y2 - y1) / (x2 - x1);
// console.log(gradient2);

// //7
// console.log(gradient1 === gradient2 ? true : false);

// //8

// let x3;
// let y3 = 0;
// x3 = Math.sqrt(y3) - 3;

// console.log(x3);

// //9
// let hours9 = Number(prompt("kaç saat? :"));
// let perHour = Number(prompt("oran :"));
// console.log(hours9 * perHour);

// //10
// let name1 = String(prompt("name"));
// let length = name1.length;
// console.log(length);
// if(length < 7)
//  console.log("Kısa")
// else if(length > 7)
//  console.log("uzun");
// else
//  console.log("orta");

//11
// let firstName11 = String(prompt("isim : "));
// let lastName11 = String(prompt("soyisim : "));
// let nameLenght11 = firstName11.length;
// let lastLenght11 = lastName11.length;
// (nameLenght11  > lastLenght11) ? console.log(`Your first name, ${firstName11} is longer than your family name`)
// : (console.log(`Your first name, ${firstName11} is not longer than your family name`));,

//12
// let myAge = Number(prompt("myage : "));
// let yourAge =  Number(prompt("yourAge : "));
// (myAge < yourAge) ? (console.log(`I am ${myAge} years younger than you.`))
// :  (console.log(`I am ${myAge} years older than you.`));

//13
// let  birthYear = Number(prompt(" birth year : "));
// let Dates = new Date();
// let year = Dates.getFullYear();
// let age =  Number(year - birthYear);
// age < 18 ? console.log(` You are ${age}. You will be allowed to drive after ${18 - age} years.`) : 
// console.log(`You are ${age}. You are old enough to drive`);

//14
// let live = Number(prompt("Enter number of years you live:"));
// console.log(live * 365 * 24 * 60 * 60);

//15
// let time15 = new Date();
// let year15 = (time15.getFullYear());
// let month15 = (time15.getMonth());
// let date15 = (time15.getDate());
// let hour15 = (time15.getHours());
// let min15 = (time15.getMinutes());
// //i
// console.log(`${year15}-${month15}-${date15} ${hour15}:${min15}`);
// //ii
// console.log(`${date15}-${month15}-${year15} ${hour15}:${min15}`)
// //iii
// console.log(`${date15}/${month15}/${year15} ${hour15}:${min15}`)
