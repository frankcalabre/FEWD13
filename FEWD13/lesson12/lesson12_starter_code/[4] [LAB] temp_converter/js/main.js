

$("#fahrenheit_to_celsius").on("click", function (){
	//get the users value
	var temp = $("#temperature").val();
	//parsefloat to make it a number we can work with
	temp = parseFloat(temp);
	//do the math provided
	result = (temp - 32) / 1.8;
	//output the result to the page
	$("#result").html(result);
});

$("#celsius_to_fahrenheit").on("click", function (){
	//get the users value
	var temp = $("#temperature").val();
	//parsefloat to make it a number we can work with
	temp = parseFloat(temp);
	//do the math provided
	result = 1.8 * temp + 32; 
	//output the result to the page
	$("#result").html(result);
});

