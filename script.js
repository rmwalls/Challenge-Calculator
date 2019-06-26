// make sure document is ready
$(document).ready(function () {    
    
    //Declare needed variables, initiate billTotal to 0, numberSplittingCheck to 1
    var billTotal=0;
    var tipPercentage;
    var tipAmount;
    var grandTotal;
    var numberSplittingCheck=parseFloat("1");
    var amountEach;
    
    //on calculate button click do the math and display the results
    const myButton = document.querySelector("#calculate"); 

    // calculate the numbers
    myButton.addEventListener('click', () => {    
        billTotal=parseFloat(document.getElementById("billTotal-input").value).toFixed(2);
        tipPercentage=document.getElementById("tipPercentage-input").value;
        tipAmount=parseFloat((tipPercentage - 1) * billTotal).toFixed(2);
        grandTotal = parseFloat(billTotal * tipPercentage).toFixed(2);
        numberSplittingCheck=parseFloat(document.getElementById("numberSplittingCheck-input").value);
	validateNSC();
	if (numberSplittingCheck === 1) {
	   var resultText = "person";
	} else {
	   var resultText = "people";
	}
        amountEach = parseFloat(grandTotal / numberSplittingCheck).toFixed(2);
	validateBillData();
        
        // unhide results in case Reset has been clicked
	$("#totalBill").show();
	$("#tipAmount").show();
	$("#totalTotal").show();
	$("#numberSplittingCheck").show();
        $("#amountEach").show();

        //write results back to the page
        document.querySelector("#totalBill").innerHTML="<br>" + "The Bill is $" + "<strong>" + billTotal + "</strong>";
        document.querySelector("#tipAmount").innerHTML="The Total Tip is $" + "<strong>" + tipAmount + "</strong>";
        document.querySelector("#totalTotal").innerHTML="Making the Grand Total " + "<strong>" + "$" + grandTotal + "</strong>";
        document.querySelector("#numberSplittingCheck").innerHTML="Which, split by " + "<strong>" + numberSplittingCheck + "</strong>" + " " + resultText;
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

    function validateBillData() {
                if (billTotal == 0) { //if billtotal is zero 
                alert("Please enter a positive number as the bill total. Calculation invalid.");
                document.getElementById("form").reset(); //Clear form for next entry
                return false;
                } else if (billTotal.includes("-"))  { // if billTotal is negative
                        alert("Please enter a positive number as the bill total. Calculation invalid.");
                        return false;
                } else if (isNaN(billTotal)) { // if billTotal is not a number
                        alert("Bill amount can not be blank. Calculation invalid.");
                        return false;
                } else {
                        return;
                } //end if stmnts
        } //end valBill
       
	function validateNSC() {
	        if (numberSplittingCheck <= 0) { //if less than 1, set to 1 
                numberSplittingCheck = 1
                console.log("in the if for NSC " + numberSplittingCheck);
                return;
	        } else if (isNaN(numberSplittingCheck)) {
                numberSplittingCheck=parseFloat("1");
                return;
                } else {
                return;
	        } //end if stmnts
    	} // end valNSC

        const audio = new Audio('Cash Register Cha Ching-SoundBible.mp3'); // identify audio file
        $('#calculate').click( () => audio.play() ); // play when calculate button is clicked

        const audio2 = new Audio('Swoosh 1-SoundBible.mp3'); // identify audio file
        $('#reset').click( () => audio2.play() ); // play it when clear button is clicked

}) // end document ready
