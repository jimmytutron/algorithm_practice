//1.4
//Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
//A palindrome is a word or phrase that is the same forwards and backwards. 
//A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

//Example - "Tact Coa" permutation is "Taco Cat" which is a palindrome

function checkPalindrome(string){
//create an empty object
var obj = {};
//iterate through the string
for (var i = 0; i < string.length; i++){
    var current = string[i];
    if (obj[current]){
        obj[current] = obj[current]+1;
    }
    else {
        obj[current] = 0;
    }
}

var odd = false;
var letters = Object.keys(obj)

for (var j = 0; j < letters.length; j++){
    var evenCheck = (letters[i] % 2) === 0;
    if (!evenCheck && odd){
        return true;
    }
    else if (!evenCheck && !odd){
        odd = true;
    }
}
return true;

}

