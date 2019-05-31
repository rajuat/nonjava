"use strict"

var val = 0;
add(val);
console.log("val:" + val);
function add(val){
    val = 9;
    console.log("val in add:" + val);
}


