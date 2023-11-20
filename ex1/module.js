let number = 0

function next() {
    return ++number;
}

function prve() {
    return --number;
}

module.exports = {
    next,
    prve
}