//given two strings -> string1 and string2, find if string2 is permuation of string1

//i have created hashmap for the string1 , then compared each character of string2 with hashmap key value value pairs , decrementing values from hashmap
// if hashmap value reach -1 at any time or string2 character is not in the hashmap, we return false immediately.
//time complexity is O(n+k) , space complexity is O(n) where n is length of string1



function StringPermutable(str1, str2) {  // consructor
    this.str1 = str1;
    this.str2= str2;
};

StringPermutable.prototype.createMap = function (string) {  //creates frequency of characters using Map
    'use strict';
    let map = new Map();
    let i=0;
    for(i=0; i<string.length;i++) {
        let alphabet = string.charAt(i);
        let val = map.get(alphabet);
        if (val === undefined) {
            map.set(alphabet, 1);
        }
        else
            map.set(alphabet, val + 1);
    }
    return map;
};

StringPermutable.prototype.checkPermutable=function () {
    'use strict';
    //if two strings do not have same length, they can not be permutation of each other
    if(this.str1.length !== this.str2.length)
        return false;
    let map = this.createMap(this.str1);
    let i=0;
    for(i=0; i<this.str2.length;i++)
    {
        let alphabet= this.str2.charAt(i);
        let val =map.get(alphabet);
        // checking if string1 and string2 have same characters....
        // checking if string 1 map has all string2 characters
        if(map.get(alphabet)>=0)
        {
            map.set(alphabet,val-1);
            // if string2 has extra character which is not present is string1 hashmap frequency
            if(map.get(alphabet)<0)
                return false;
        }
        // if string 1 map does not have string2 character
        else if(map.get(alphabet) === undefined)
            return false;
    }
    //
    return true;
};

let test1 = new StringPermutable('tact','aoc tact');
let test2 = new StringPermutable('manpreet','maannntt');

let result1 = test1.checkPermutable();
console.log('result1 of test1 ',result1);

let result2 = test2.checkPermutable();
console.log('result2 of test2 ',result2);

