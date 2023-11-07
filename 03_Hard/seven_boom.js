// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
    const regex = /7/;
    arr.forEach(element => {
        element.toString();
    });
    if (regex.test(arr)) return "Boom!";
    return "there is no 7 in the array";
}
