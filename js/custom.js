//Palindrome Test Function
document.getElementById("btnWord").addEventListener("click", function(){

    let str = document.getElementById("inputx").value;
    //Check to ensure the user made a valid entry
    if (str == "") {
        swal("Nothing Entered!", "Please enter a word or phrase!", "error");
        document.getElementById("inputx").value = "";
    }
 
    //Convert string to all lowercase letters
    let str1 = str.toLowerCase();
 
    //Remove all spaces from the string
    str1 = str1.replace(/ /g, "");
    let length = str1.length;

    //Get the string length to use in loop
    let len = length - 1;
 
    //Create a string to compare str1 to
    let str2 = "";
 
    //Use a loop to loop str1 into str2 in reverse order
    for (j = len; j >= 0; j--) {
        str2 += str1[j];
    }
 
    //Create a variable to store the message to present to user.
    let message;

    //Compare the two strings to each other
    if (str1 === str2) {
        message = `"${str}" <b><u>is</u></b> a Palindrome!`;
    }
    else {
        message = `"${str}" <b>is <u>NOT</u></b> a Palindrome!`;
    }
    document.getElementById("outputx").innerHTML = message;

    //Clear input box
    document.getElementById("inputx").value = "";
});