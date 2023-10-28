const fibonacci = function(count) {
    if (count < 0 ) return "Error"
    if (count === 0) return 0


    let firstPrev= 1
    let secondPrev = 0

    for (let i = 2; i <= count; i++){
        let current = firstPrev + secondPrev
        secondPrev = firstPrev
        firstPrev = current
    }
    return firstPrev

};

;
// input 1-10 , not negative signs
//output 1 , 1 , 2, 3 , 5, 8, 13,
// 1 , 1, 2, 3, 5, 
// 
// Do not edit below this line
module.exports = fibonacci;
