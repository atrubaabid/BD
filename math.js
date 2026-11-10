
// 5. What is module.exports?

// DEFAULT-EXPORT
function add(a, b) {
    return a + b
}

module.exports = add;

// NAME-EXPORT
function add2(a, b) {
    return a + b
}

let myname = "atruba";

module.exports = { add2, myname };
