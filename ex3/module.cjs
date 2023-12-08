let number = 0;

function next() {
    return ++number;
}

function prev() {
    return --number;
}

function square() {
    return number * number;
}

module.exports = {
    next , prev , square
}