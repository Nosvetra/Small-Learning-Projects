class Solution {
  finaDisaapeardNos(nums) {
    let rangeN = nums.length;
    let final = [];
    for (let i = 0; i < nums.length; i++) {
      while (nums[i] !== nums[nums[i] - 1]) {
        const temp = nums[i];
        nums[i] = nums[temp - 1];
        nums[temp - 1] = temp;
      }
    }

    for (let i = 0; i < rangeN; i++) {
      if (nums[i] != i + 1) {
        final.push(i + 1);
      }
    }
    console.log(final);
  }
}

let arr = [4, 3, 2, 7, 8, 2, 3, 1];

const obj = new Solution();
const b = obj.finaDisaapeardNos(arr);
console.log(b);
