// 1.6 String Compression
// Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. 
// If the "compressed"string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(string){
//set a counter
var counter = 1;
var currentCharacter = '';
var compressedString = '';
//iterate through the string
    for (var i=0; i < string.length; i++){
        if (currentCharacter !== string[i]){
            counter++;
        }
    }
}