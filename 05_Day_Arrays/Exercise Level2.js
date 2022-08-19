//	Exercise Level2


// //1
// let  text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// text = text.replaceAll(".", "");
// text = text.replaceAll("," , "");

// text = text.split(" ");
// console.log(text)
// console.log(text.length);

// //2
// const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// let add = prompt("Bir sey girin");
// let alergy = Number(prompt("Alerjin var mı? :( 1 = var 0 = yok):" ))

// if(add == "Meat")
// 	shoppingCart.unshift("Meat");
// else if(add == "Sugar")
// 	shoppingCart.push("Sugar");
// 	console.log(shoppingCart);

// if(alergy == 1)
// {
// 	let i = shoppingCart.indexOf("Honey");
// 	console.log(i)
// 	shoppingCart.splice(i, 1);
// }

// let j = shoppingCart.indexOf("Tea");

// shoppingCart[j] = "Green Tea";
// console.log(shoppingCart);

//3
// const  countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
// console.log(countries.indexOf("Ethiopia"));

// if(countries.indexOf("Ethiopia") != -1)
// 	console.log("ETHIOPIA");
// else
// {	
// 	countries.push("Ethiopia");
// 	console.log(countries);
// }

//4
// const  webTechs = [
// 	'HTML',
// 	'CSS',
// 	'JavaScript',	
// 	'React',	
// 	'Redux',	
// 	'Node',	
// 	'MongoDB'
// 	]

// if(webTechs.indexOf("Sass") != -1)
// 	console.log("Sass is a CSS preprocess");
// else
// {	
// 	webTechs.push("Sass");
// 	console.log(webTechs);
// }

//5
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// let fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);

