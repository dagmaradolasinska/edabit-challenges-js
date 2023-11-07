// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
    let num = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == true) {
            num += 1;
        }
    }
    return num;
}
