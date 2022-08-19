//	Exercise Level1
//1
//let  arr = [];

//2
// let  arr = [0, 1, 2, 3, 4, 5, 6];

// //3
// let arrlenght = arr.length;
// console.log(arrlenght);

// //4
// console.log(arr[0], arr[Math.floor(arrlenght / 2)], arr[arrlenght - 1]);

// //5
// let mixedDataTypes = ["ebrar", 4, null, undefined, 5 , "4"];
// console.log(mixedDataTypes.length);

// //6
// let ItCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon"];

// //7
// console.log(ItCompanies);

// //8
// console.log(ItCompanies.length);

//9
//console.log(ItCompanies[0], ItCompanies[Math.floor(ItCompanies.length / 2)], ItCompanies[ItCompanies.length - 1])

//10
//ItCompanies.forEach(element=> {console.log(element)});

// //11
// ItCompanies.forEach(element=> {console.log(element.toUpperCase())});

// //12
// console.log(`${ItCompanies} are big IT companies.`);

//13
// let company = prompt("şirket adı :");
// function myfunc(company) {
//     for(let i = 0 ; i < ItCompanies.length; i++)
//     {
//         if(company == ItCompanies[i])
//         {
//             return(company);
//         }
//     }
//     return("not found");
// }
// console.log(myfunc(company));

// //14
// for(let i = 0; i < ItCompanies.length ; i++)
// {
// 	for(let j = 0; j < ItCompanies[i].length ; j++)
// 	{
// 		if(ItCompanies[i][j] == "o")
// 		{
// 			for(j = j + 1; j < ItCompanies[i].length ; j++)
// 			{
// 				if(ItCompanies[i][j] == "o")
// 				{
// 					let oo = [];
// 					oo.push = ItCompanies[i];
// 					console.log(oo);
// 				}
// 			}

// 		}
// 	}
// }

// //15
// console.log(ItCompanies.sort());

// //16
// console.log(ItCompanies.reverse());

// //17
// console.log(ItCompanies.slice(4));

// //18
// console.log(ItCompanies.slice(0, Math.floor(ItCompanies.length / 2)));

// //19
// console.log(ItCompanies.slice(Math.floor(ItCompanies.length / 2) , Math.floor(ItCompanies.length / 2) + 1));

//20
// ItCompanies.shift();
// console.log(ItCompanies);

//21
//Remove the middle IT company or companies from the array
// ItCompanies.splice(ItCompanies[Math.floor(ItCompanies.length / 2)]);
// console.log(ItCompanies);

//22
// ItCompanies.pop();
// console.log(ItCompanies);

//23
// ItCompanies.forEach(element => ItCompanies.splice(element));
// console.log(ItCompanies);