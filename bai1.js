function isSymmetricArray(arr) {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function checkAndPrintResult(arr) {
    console.log("Mảng ban đầu:", arr);
    const result = isSymmetricArray(arr);
    console.log("Mảng đối xứng:", result);
}
const randomArray = [1, 2, 3, 2, 1];
checkAndPrintResult(randomArray);
