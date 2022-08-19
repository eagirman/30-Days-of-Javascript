//Exercises: Level 3
//1

let month = prompt("Ay girin:");
if(month === "February")
	console.log(`${month} has 28 or 29 days.`);
else if(month === "January" || month === "March" || month === "May" ||month === "July" || month ==="August" || month === "October" )
	console.log(`${month} has 31 days.`);
else 
	console.log(`${month} has 30 days.`);
