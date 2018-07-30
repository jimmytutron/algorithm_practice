//1.5 One Away
//There are three types of edits that can be performed on strings: 
//insert a character, remove a character, or replace a character. 
//Given two strings, write a function to check if they are one edit (or zero edits) away.

function check(str1, str2) {
    //compare letters from str1 to str2. 
    var diff1 = difference(str1, str2);
    var diff2 = difference(str2, str1);
    return (diff1 < 2 && diff2 < 2);
}

function difference(str1, str2){
    var test1 = str1.split('');
    for (var i=0; i<str2.length;i++){
        if (test1.includes(str2[i])){
            var letterIndex = test1.indexOf(str2[i]);
            test1.splice(letterIndex, 1);
        }
    }
    return test1.length;
}