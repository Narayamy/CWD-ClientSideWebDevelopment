
var hidden = document.getElementsByClassName("readMore");
var readmore = document.getElementsByClassName("readmore");
// loop through the array of 'hidden' elements and hide them
for(var i=0; i<hidden.length; i++){
    hidden[i].style.display = "none";
}
/* Loop through the array of 'readmore' elements 
and add an event listener to each item.
When clicked it will call the HideShowText function */
for(var i=0; i<readmore.length; i++){
    readmore[i].addEventListener("click", HideShowText);
}

function HideShowText(e){
    /* get the readmore link (a tag) that was clicked */
	var elementclicked = e.target; 
	var ptag = elementclicked.parentElement; 
	/* get the next sibling of the parent */
	//This is the div which holds the text which we hide/show
	var sibling = ptag.nextElementSibling; 

	/* If the sibling was hidden, show it, and vice versa */
	if(sibling.style.display == "none"){
		sibling.style.display = "block";
	}else{
		sibling.style.display = "none";
    } 
}
var submit = document.getElementById("submit");
submit.addEventListener("click", process);

function process(){
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var gender = document.getElementsByClassName("gender").value;
    var phonenumber = document.getElementById("phonenumber");
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var comment = document.getElementById("comments").value;
    var feedback = "Thank you very much " + firstName + lastName + "<br/>Yor Phone Number is " + phonenumber + "<br/ Your email is " + email + "<br/Your feedback is: " + comment + "<br/>We will process your feedback! ";
  //  feedback.innerHTML = "Thank you very much " + firstName + lastName + "<br/>Yor Phone Number is " + phonenumber + "<br/ Your email is " + email + "<br/Your feedback is: " + comment + "<br/>We will process your feedback! ";
    alert(feedback);
}


$( document ).ready(function() {
    
    $(".menu-btn").click(function() {
        $(this).hide();
        $('.cross').show()
        $(".navbar").slideToggle();
      });
    $(".cross").click(function() {
        $(this).hide();
        $('.menu-btn').show();
        $(".navbar").slideToggle();
      });
})