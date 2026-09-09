class Solution {
  matrixBinarySearch(arr, target) {
    let rows = arr.length;
    let colums = arr[0].length;
    let left = 0,
      right = rows * colums - 1;
    while (left <= right) {
      console.log("iterate counter");
      let mid = Math.floor(left + right / 2);
      let row = Math.floor(mid / colums);
      let colum = mid % colums;
      let value = arr[row][colum];
      if (value === target) {
        return true;
      }
      value > target ? (right = mid - 1) : (left = mid + 1);
    }
    return false;
  }
}

let arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const obj = new Solution();
const b = obj.matrixBinarySearch(arr, 90);
console.log(b);
