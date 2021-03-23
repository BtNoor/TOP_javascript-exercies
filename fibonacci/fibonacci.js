const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    let c = 1;

    let newNum = parseInt(num)

    if (newNum < 0) {
        return "OOPS"
    }

    for (i = 2; i < newNum; i++) {
        c = a + b;
        a = b;
        b = c;
    } return c
}

module.exports = fibonacci

// 0 + 1 = 1
//1 + 1 = 2
//1 + 2 = 3
//2 + 3 = 5
//3 + 5 = 8
//5 + 8 = 13