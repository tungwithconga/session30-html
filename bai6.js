function isTrle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}
function countTrles(arr) {
    const n = arr.length;
    let count = 0;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (isTrle(arr[i], arr[j], arr[k])) {
                    count++;
                }
            }
        }
    }
    return count;
}
const integerArray = [4, 6, 3, 7];
const result = countTrles(integerArray);
console.log(`Số lượng tam giác có thể tạo ra từ mảng là: ${result}`);
