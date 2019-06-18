// need to 
//      validate input, is there input, is it a positive number?
//      default number of people to split the bill by if not entered
//      need to clear input fields
//      add more comments

//declare functions as page loads to make sure that the elements are shown and hidden
$(document).ready(function () {    
    
    var billTotal;
    var tipPercentage;
    var tipAmount;
    var grandTotal;
    var numberSplittingCheck;
    var amountEach;
    
    //on button click calculate the tip
const myButton = document.querySelector("#calculate"); 

myButton.addEventListener('click', () => {    // calculate the numbers
        billTotal=document.getElementById("billTotal-input").value;
        tipPercentage=document.getElementById("tipPercentage-input").value;
        tipAmount=parseFloat((tipPercentage - 1) * billTotal).toFixed(2);
        grandTotal = parseFloat(billTotal * tipPercentage).toFixed(2);
        numberSplittingCheck=document.getElementById("numberSplittingCheck-input").value;
        amountEach = parseFloat(grandTotal / numberSplittingCheck).toFixed(2);
        //write back to the page
        document.querySelector("#totalBill").innerHTML="<br>" + "The Bill is $" + "<strong>" + billTotal + "</strong>";
        document.querySelector("#tipAmount").innerHTML="The Total Tip is $" + "<strong>" + tipAmount + "</strong>";
        document.querySelector("#totalTotal").innerHTML="Making the Grand Total " + "<strong>" + "$" + grandTotal + "</strong>";
        document.querySelector("#numberSplittingCheck").innerHTML="Which, split by " + "<strong>" + numberSplittingCheck + "</strong>" + " people";
        document.querySelector("#amountEach").innerHTML="is $" + "<strong>" + amountEach + "</strong>" + " per person";

    }) //end myButton

}) // end document ready

 
