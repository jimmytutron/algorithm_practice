//1.4
//Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
//A palindrome is a word or phrase that is the same forwards and backwards. 
//A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

//Example - "Tact Coa" permutation is "Taco Cat" which is a palindrome

function checkPalindrome(string){
    //remove white space and lowercase the string
    newString = string.toLowerCase().replace(/ /g,'');
    //sort the string alphabetically
    var sortedString = newString.split('').sort().join('');
    count = 0;
    //check if the string is even or odd
    if (sortedString.length % 2 === 0){
        //if the string is even each character should appear twice
        for (var i = 0; i < sortedString.length; i + 2){
            if (sortedString[i] !== sortedString[i+1]){
                return console.log(newString + " is not a palindrome")
            }
        }
    } else {
    for (var i = 0; i < sortedString.length; i + 2){
            if (sortedString[i] !== sortedString[i+1]){
                return console.log(newString + " is not a palindrome")
            }
        }
    }
    return console.log(newString + " is a palindrome")
}

checkPalindrome('aa');