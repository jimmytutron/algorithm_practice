//1.3 URLify
//Write a method to replace all spaces in a string with '%20'.

function urlify(string){
    var newString = string.replace(/\ /g, '%20');
    console.log(newString)
}

urlify('Hello World!');

//time complexity = O(N)? idk