// Together: write pseudo code
// Objective: we want to change the background color when we click on the light switch

/*
1) we want to select the lightswitch
2) what is the current background color? Does the body tag have a class of "dark" on it?
3) If there is a class of dark, remove it. If there is not, add it.

*/


// Hint: for your condition, you'll need to look up and use the .hasClass() method. You'll want to use this as part of your condition.

// Hint #2: Refer to the syntax on the cheat sheet. The entire condition gets wrapped in parentheses. (your condition goes here)
$("#light_switch").on("click", function(){
	// console.log("it works");

	if($("body").hasClass("dark")) {

		// console.log("has dark class");
		$("body").removeClass("dark");

	}else{

		// console.log("there is no dark class");
		$("body").addClass("dark");
	}

})