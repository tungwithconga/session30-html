function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function inNumbers(arr) {
    console.log("Các số nguyên tố trong mảng là:");
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            console.log(arr[i]);
        }
    }
}
const integerArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
inNumbers(integerArray);
