$(function() {
   $("button").on("click", function(event) {
   	/*For the amount of words given.*/
   	 event.preventDefault();
     var wordCount = $("textarea").val().trim().split(/\s+/); // Use val for input elements to get the text, then trim the whitespace
     $("dl").removeClass("hidden"); // on both sides of the string, finally split it up into an array based on the spaces in between
     $(".wordCount").text(wordCount.length); // each character.
     
     
     /*For the unique amount of words.*/
     var  wordUnique = {};
     wordCount.forEach( function(x) {
     	wordUnique[x] = (wordUnique[x] || 0) + 1; // Creates a key for the word passed in like wordUnique[fart] would be {fart: value}
     }); //then either references(if it doesn't exist it goes to null so it goes to 0 because of ||) and adds 1 to count.
     $(".uniqueWord").text(Object.keys(wordUnique).length); // Takes the keys of the object and turns it into an array so we can apply 
     // the length method. 

     
     /*For the average word length*/
     var wordCharacterCount = $("textarea").val().trim().split(" ").join(""); // use val for input elements, trim the whitespace on both sides
     var averageWord = wordCharacterCount.length / wordCount.length; // of the String, split into an array by spaces in between each character, then joins
     $(".averageWord").text(averageWord + " Characters");// all things in the array into one single string so wordCharacterCount is no longer an array but a String so 
     // .length counts the length of the word.
  });
})