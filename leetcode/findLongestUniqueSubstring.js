
var lengthOfLongestSubstring = function(s) {
    let max = 0, left = 0;
    let ascii = new Int8Array(128);
    for (let i = 0; i < s.length; i++){                
        let element = s.charCodeAt(i);
        if(ascii[element] > 0){
            max = Math.max(max, i-left);            
            if(s.charCodeAt(i-1) == element){
                left = i;
            } else {
                left = Math.max(left, ascii[element]);
            }
            ascii[element] = i + 1;
        } else {
            ascii[element] = i;
        }
    }    
    max = Math.max(max, s.length - left);    
    return max == 0 ? s.length : max;
}

console.log("Result: "+lengthOfLongestSubstring("dfjgasdjfgjasgd"));