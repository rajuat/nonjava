
console.log(find("asdfgh"));

function find(string) {
    var max, left = 0;
    let ascii = new Int8Array(128);
    for (let i = 0; i < string.length; i++){        
        let element = string.charAt(i);        
        if(ascii[element] != -1){
            max = Math.max(max, i-left);
            this.max = i - ascii[element];
            ascii[element] = i;
        } else {
            ascii[element] = i;
        }
    }
    return max;
}