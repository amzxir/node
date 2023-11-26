let number = 0

function next() {
    return ++number;
}

function prve() {
    return --number;
}

function square() {
    return number * number;
}

module.exports = {
    next,
    prve,
    square
}