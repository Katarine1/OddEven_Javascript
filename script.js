
let n = prompt("Enter Quantity Number:");

for(let i = 0 ; i < n ; i++)
{
	console.log((i + 1) + ")");


	let number = prompt("Enter Number:");

	if(number % 2 === 0)
	{
		console.log("Number Even : " + number);
		console.log("------------");
	}
	else
	{
		console.log("Number Odd : " + number);
		console.log("------------");
	}		
}
