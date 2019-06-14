var isPowerOfTwo = function(n) {
    if(n < 1){
        return false;
    } 
    
    var twosPower = 1;
    var foundAOnes = (n & twosPower) != 0;
    for (var i = 1; i < 31; i++) {
        twosPower = twosPower << 1;
        if ((n & twosPower) != 0) {
            if (foundAOnes) {
                return false;
            }
            foundAOnes = true;
        }
    }
    return true;
};

console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(-1));