// need to 
//      validate input, is there input, is it a positive number?, make sure it isn't text
//      default number of people to split the bill by if not entered
//      

//declare functions as page loads to make sure that the elements are shown and hidden
$(document).ready(function () {    
    
    //Declare needed variables, initiate billTotal to 0, numberSplittingCheck to 1
    var billTotal=0;
    var tipPercentage;
    var tipAmount;
    var grandTotal;
    var numberSplittingCheck=1;
	console.log("initial val of NSC is " + numberSplittingCheck);
    var amountEach;
    
    //on button click do the math and display the results
    const myButton = document.querySelector("#calculate"); 

    myButton.addEventListener('click', () => {    // calculate the numbers
        billTotal=parseFloat(document.getElementById("billTotal-input").value).toFixed(2);
        tipPercentage=document.getElementById("tipPercentage-input").value;
        tipAmount=parseFloat((tipPercentage - 1) * billTotal).toFixed(2);
        grandTotal = parseFloat(billTotal * tipPercentage).toFixed(2);
        numberSplittingCheck=document.getElementById("numberSplittingCheck-input").value;
	console.log("after click NSC is " + numberSplittingCheck);
        amountEach = parseFloat(grandTotal / numberSplittingCheck).toFixed(2);
	console.log("amountEach is " + amountEach);
        validateBillData();
	validateNSC();
        //document.getElementById("form").reset(); //Clear form for next entry
        //write back to the page
	$("#totalBill").show();
	$("#tipAmount").show();
	$("#totalTotal").show();
	$("#numberSplittingCheck").show();
	$("#amountEach").show();
        document.querySelector("#totalBill").innerHTML="<br>" + "The Bill is $" + "<strong>" + billTotal + "</strong>";
        document.querySelector("#tipAmount").innerHTML="The Total Tip is $" + "<strong>" + tipAmount + "</strong>";
        document.querySelector("#totalTotal").innerHTML="Making the Grand Total " + "<strong>" + "$" + grandTotal + "</strong>";
        document.querySelector("#numberSplittingCheck").innerHTML="Which, split by " + "<strong>" + numberSplittingCheck + "</strong>" + " people";
        document.querySelector("#amountEach").innerHTML="is $" + "<strong>" + amountEach + "</strong>" + " per person";
 
    }) //end myButton

	const resetButton = document.querySelector("#reset"); 
	resetButton.addEventListener('click', () => {
	$("#totalBill").hide();
	$("#tipAmount").hide();
	$("#totalTotal").hide();
	$("#numberSplittingCheck").hide();
	$("#amountEach").hide();
	return;
	}) // end resetButton

    function validateBillData(){
        if (billTotal == 0 || billTotal.includes("-")) { //if billtotal is zero or has a negative number
          alert("Please enter a positive number as the bill total");
	  console.log("in the if for billdata");
          return false;
        } else {
	  return true;
	} //end if-else
        } //end valBill

	function validateNSC() {
	if (numberSplittingCheck == "" || numberSplittingCheck <= 0) { //default to 1 if blank or less than 1
        numberSplittingCheck=1;
	console.log("in the if for NSC " + numberSplittingCheck);
	} else {
	return;
	} //end if-else
    	} // end valNSC

        var audio = new Audio('Cash Register Cha Ching-SoundBible.mp3'); // identify audio file
        $('#calculate').click( () => audio.play() ); // play it when button is clicked

}) // end document ready
