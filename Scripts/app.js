/**
 * Created by devon on 2016-02-04.
 */

"use strict";

// Set up your IIFE (Immediately Invoked Function Expression) or ASEF (Anonymous Self-Executing Function)
(function(){
    console.log("App Started . . .");

    // named function way
    function replaceFirstParagraph(){
        console.log("Inside replaceFirstParagraph function.");
        var firstParagraph;
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "My New Paragraph Data";
    }
    // Call replaceFirstParagraph function defined above.
    replaceFirstParagraph();

})();