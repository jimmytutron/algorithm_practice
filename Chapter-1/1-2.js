//1.2 Permutations
// Given two strings, create a method to check if one is a permutation of the other

//Check length of both strings
function checkPermutation (string1, string2){
    if (string1.length !== string2.length){
        return console.log(false)
    }
//Sort the strings alphabetically 
        var sorted1 = string1.split('').sort().join('');
        var sorted2 = string2.split('').sort().join('');
//Compare the results of the sorted string
        return console.log(sorted1 === sorted2);
}
//Time complexity = O(N log N)
checkPermutation('cat', 'act');
