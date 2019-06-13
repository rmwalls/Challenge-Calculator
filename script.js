// allow person to enter 
//      the amount of the bill
//      tip percentage they want to add --- use a drop down with choices
//      number of people to split the bill by
// n
// then multiply the bill by the tip
// divide that total  by the number to split (whole number only)
// so bill amount *  1.tip% / number = amount each


$(document).ready(function () {
    //declare functions as page loads to make sure that the elements are shown and hidden
    
    
    var billWithTip=0;
    var numberSplittingCheck=0;
    var amountEach=0
    
    //on button click calculate the tip
    document.getElementById("calculate").onclick = calculateTip();

    function calculateTip() {
        //store values
        var billTotal=getElementById("billTotal-input").value;
        console.log("bill total= " + billTotal);
        var tipPercentage=document.getElementById("tipPercentage-input").value;
        console.log("tip % = " + tipPercentage);
        
    } //end calculate tip

    function calculateGrandTotal() {

    }

    function amountEach() {

    }

    /*on page load
    function load() {
        $("#area").hide("fast");
        $("#carouselTattoo").hide("fast");
        $("#imageParagraph").hide("fast");
        $("#lastInput").hide("fast");
        $("#newSearch").hide("fast");
    }   // end page load */


}) // end document ready

 