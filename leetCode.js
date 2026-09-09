class Solution {
  subsets(nums) {
    let final = [[]];
    if (nums.length === 1) {
      final.push([nums[0]]);
    }
    const distinctArrElements = new Set();
    for (const i of nums) {
      distinctArrElements.add(i);
    }
    distinctArrElements.forEach((a) => {
      final.push([a]);
    });
    return final;
  }
}

let arr = [23, 30, 34, 60, 60, 23];

const obj = new Solution();
const b = obj.subsets(arr);
console.log(b);
