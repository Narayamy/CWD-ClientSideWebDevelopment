//Explanation: hidden and accessed by the 'How to complete the quiz' link - Must be done with JavaScript
var link = document.getElementById("how-to-complete-the-quiz");
//hide all the elements with class 'hidden'
var hidden = document.getElementsByClassName("hidden");
var hiddenFeedback = document.getElementsByClassName("hidden-feedback");
for(var i=0; i<hidden.length; i++){
hidden[i].style.display = "none";
}
for(var i=0; i<hiddenFeedback.length; i++){
hiddenFeedback[i].style.display = "none";
}
//Event that will execute the function named 'hideShow' when the link is clicked
link.addEventListener("click", hideShow);

function hideShow(e){
var elementClicked = e.target;	//Select the element clicked (the link)
var sibling = elementClicked.nextElementSibling; //Select the 'a' tag next sibling, the 'p' tag	
//if the 'p' tag is hidden --> show; if is shown --> hide
if(sibling.style.display == "none"){
	sibling.style.display = "block";
} else {
	sibling.style.display = "none";
}
}
//JQuery code: it will read this code when the HTML document is fully ready
$(document).ready(function(){	
//This code will initialize when the user click on the button 'submit'
	$("#submit").click(function(){		
		//Variables are create to store the user input and to display feedback in the bottom
		var userInput_1 = $("input[name='question-1']:checked").val();
		var userInput_2 = $("input[name='question-2']:checked").val();
		var userInput_3 = $("#answer-3").val();
		var userInput_4 = $("#answer-4").val();
		var userInput_5 = $("#answer-5").val();		
		var feedback = $("#feedback");	
				
		//Statement to check if user answered ALL the questions	
		//If the input type is radio or checkbox, if user forget to answer it will return undefined
		//If the input type is text, if user forget to answer it will return an empty string
		//If the input is a select, if user forget to answer it will return null
		if((userInput_1 == undefined) || (userInput_2 == undefined) || (userInput_3 == "") || (userInput_4 == "") || (userInput_5 == null)){
			feedback.html("<b>Please make sure you answered ALL the five questions!</b>");
		} else {
			//Only if all the questions were answered, then it will check how many answers are correct & display feedback
			var totalCorrectAnswers = 0;			
			//If/else statement to check if each answer is correct
			if(userInput_1 == "false"){
				totalCorrectAnswers++;
				correct1.style.display = "block";
				Incorrect1.style.display = "none";
			} else {
				correct1.style.display = "none";
				Incorrect1.style.display = "block";
			}			
			if(($("input[value='t1']").is(":checked")) && (!$("input[value='f1']").is(":checked")) && (!$("input[value='f2']").is(":checked")) && 
				($("input[value='t2']").is(":checked")) && ($("input[value='t3']").is(":checked")) && ($("input[value='t4']").is(":checked"))){
				totalCorrectAnswers++;
				Correct2.style.display ="block";
				Incorrect2.style.display ="none";
			} else {
				Correct2.style.display ="none";
				Incorrect2.style.display ="block";
			}		
			if(userInput_3 == "Potatoes" || userInput_3 =="potatoes"){
				totalCorrectAnswers++;
				Correct3.style.display ="block";
				Incorrect3.style.display ="none";
			} else {
				Correct3.style.display ="none";
				Incorrect3.style.display ="block";
			}
			if(userInput_4 == "false"){
				totalCorrectAnswers++;
				Correct4.style.display ="block";
				Incorrect4.style.display ="none";
			} else {
				Correct4.style.display ="none";
				Incorrect4.style.display ="block";
			}			
			if(userInput_5 == "Donegal"){
				totalCorrectAnswers++;
				Correct5.style.display ="block";
				Incorrect5.style.display ="none";
			} else {
				Correct5.style.display ="none";
				Incorrect5.style.display ="block";
			}			
			//Display the correct answers for each question
			for(var i=0; i<hiddenFeedback.length; i++){
				hiddenFeedback[i].style.display = "block";
			}			
			//Display the feedback with the total number of correct answers			
			if(totalCorrectAnswers == 5){
				feedback.html("You answer all questions correctly!" );
				congrats.style.display = "block";
				tryagain.style.display = "none";	
			} else{
				feedback.html("You answer " + totalCorrectAnswers + " question(s) correctly!");
				congrats.style.display = "none";
				tryagain.style.display = "block";
			}
		};		
	});
});