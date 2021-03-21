const sumAll = function(a, b) {

    let totalSum = 0;

    if (a <= 0 || typeof a != 'number' || typeof b != 'number') {
        return 'ERROR'
    } else if (a < b) {
        for (i = 0; i <= b; i++) {
            if (i >= a) {
                totalSum += i;
            }
        }
    } else if (a > b) {
        for (i = 0; i <= a; i++) {
            if (i >= b) {
                totalSum += i;
            }
        }
    }


    return totalSum;
}

module.exports = sumAll
