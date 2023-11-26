let number = 0;

function next() {
    return ++number;
}

function prve() {
    return --number;
}

function square() {
    return number * number;
}

export { next, prve, square };