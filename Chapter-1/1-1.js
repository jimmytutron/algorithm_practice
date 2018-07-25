//1.1 Is Unique 
//Implement an algorithm to determine if a string has all unique characters.

//Method 1
function hasUniqueCharacters(string) {
    //given a string, iterate through it at index 'i'
    for (var i = 0; i < string.length; i++){
        //iterate again to compare characters
        for (var j = i + 1; j < string.length; i++){
            //check if the characters at both indexes are equal
            if (string[i] === string[j]){
                return false
            }
        }
    }
    return true
}
//Time complexity = O(N^2)

//Method 2 
//Sort the string alphabetically
//strings with non unique characters will have said characters end up next to each other.
//iterate through the string and check for matches.
function hasUniqueCharactersSorted(string) {
    string.sort();

    for (var i = 0; i < string.length; i++){
        if (string[i] === string[i-1]){
            return false
        }
    }
    return true
}

//Time complexity = O(N log N)


