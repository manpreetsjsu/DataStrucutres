//given a string replace every space in strig with %20 but not at the end..

function ReplaceWith(string,length) {   //String = "mr john smith    "  output="mr%20john%20smith"
    this.str = string;
    this.len= length;
}

ReplaceWith.prototype.replaceSpace = function () {
    split_str = this.str.split('');  //["Mr","john","smith"]
    //console.log(split_str);
    let length_increment=0;
    for(let i=0; i<this.len;i++)
    {
        if(split_str[i]===" ") {
            split_str[i] = "%20";
            //incrementing length of string with %20 - 3 spaces
            length_increment += 3;
        }
    }
    // add the length of input original string length
    length_increment += this.len;
    //console.log(split_str);
    split_str = split_str.join('');
    split_str = split_str.substring(0,length_increment);
    return split_str;
};

let test= new ReplaceWith("mr   manpreet      singh       ",24);
let result = test.replaceSpace();
console.log(result);