/**
 * Created by devon on 2016-02-04.
 */

"use strict";

// Set up your IIFE (Immediately Invoked Function Expression) or ASEF (Anonymous Self-Executing Function)
(function(){
    console.log("App Started . . .");

    /*
    // named function way
    function replaceFirstParagraph(){
        console.log("Inside replaceFirstParagraph function.");
        var firstParagraph;
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "My New Paragraph Data";
    }
     */



    //declare an anon. function with named alias
    var replaceFirstParagraph = function(){
        console.log("Inside replaceFirstParagraph anonymous function.");
        var firstParagraph;
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "Newer content.";
    }

    // Call replaceFirstParagraph function defined above.
    replaceFirstParagraph();

})();