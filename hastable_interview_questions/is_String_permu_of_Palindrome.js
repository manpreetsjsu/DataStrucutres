//given a string, we need to find if that string is permuation of palindrome
//example-> Input:- Tact Coa , assume we are giving printable characters as input.....
// outpur-> true , permuations:- "taco cat"

function findPalindromePermuation(str1) {  // consructor
    this.str1 = str1;
    this.len_of_str1=str1.length; // extra variable so that we do not compute string length everytime we need by calling length method as it is overhead for performance.
    this.map_length = 0;
};

findPalindromePermuation.prototype.createMap = function (string) {  //creates frequency of characters using Map
    'use strict';
    let map = new Map();
    for(let i=0; i<this.len_of_str1;i++) {
        let alphabet = string.charAt(i).toLowerCase();
        let val = map.get(alphabet);
        if(alphabet!==" "){
            if (val === undefined) {
                map.set(alphabet, 1);
                this.map_length++;
            }
            else {
                map.set(alphabet, val + 1);
                this.map_length++;
            }
        }
    }
    console.log(map);
    return map;
};
findPalindromePermuation.prototype.checkPalindrome =function () {
    let map = this.createMap(this.str1);
    let found = false;
    for (let i = 0; i <this.len_of_str1; i++) {
        let value = map.get(this.str1.charAt(i));
        //if string is permuation of palindrome, then atmost one character can be odd -i.e middle one and remaining characters need to even even -
        // characters on left side should be same as characters on right side, only middle character can be odd if the string has odd number length
        if ( value !== undefined && value % 2 === 1) {
            if (found) {
                return false;
            }
            found = true;
        }
    }
    return true;
};

let test = new findPalindromePermuation("red ooppqqeeffzsder");
let result = test.checkPalindrome();
console.log(result);