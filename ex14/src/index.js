// Only change code below this line
function myForLoop1() {
    var evenNumbers = "";
    for (var i = 0; i < 9; i++) {
        if (i % 2 == 0) {
            evenNumbers += i;
            if (i != 8) {
                evenNumbers += ", ";
            }
        }
    }
    return evenNumbers;
}
function myForLoop2() {
    var evenInverseNumbers = "";
    for (var i = 8; i >= 0; i--) {
        if (i % 2 == 0) {
            evenInverseNumbers += i;
            if (i != 0) {
                evenInverseNumbers += ", ";
            }
        }
    }
    return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};