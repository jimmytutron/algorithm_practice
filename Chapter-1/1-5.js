//1.5 One Away
//There are three types of edits that can be performed on strings: 
//insert a character, remove a character, or replace a character. 
//Given two strings, write a function to check if they are one edit (or zero edits) away.

function check(string1, string2) {
    //compare letters from string1 to string2. 
    var diff1 = difference(string1, string2);
    var diff2 = difference(string2, string1);
    return (diff1 < 2 && diff2 < 2);
}

function difference(string1, string2){
    var test1 = string1.split('');
    for (var i=0; i<string2.length;i++){
        if (test1.includes(string2[i])){
            var letterIndex = test1.indexOf(string2[i]);
            test1.splice(letterIndex, 1);
        }
    }
    return test1.length;
}