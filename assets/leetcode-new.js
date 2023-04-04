//Length of Last Word
const lengthOfLastWord = function (s) {
  const sArray = s.trim().split(" ");
  return sArray[sArray.length - 1].length;
};

console.log(lengthOfLastWord("heelo worled "));

//217. Contains Duplicate
const containsDuplicate = function (nums) {
  // const newNum = [...new Set(nums)];
  // if (nums.length - newNum.length >= 1) {
  //   return true;
  // } else return false;
  //or
  // return nums.length - newNum.length >= 1 ? true : false
  //or

  return new Set(nums).size != nums.length;
};
console.log(containsDuplicate([1, 2, 2, 3]));

//1. Two Sum
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (first + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 18));

//27. Remove Element
const removeElement = function (nums, val) {
  const newNums = nums.filter((ele) => ele != val);
  // for (i = 0; i < newNums.length; i++) {
  //   nums[i] = newNums[i];
  // }
  //or
  nums.length = 0;
  nums.push(...newNums);
  return newNums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));

//724. Find Pivot Index Runtime: 78 ms
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let firstpart = nums.slice(0, i);

    firstpart = firstpart.length > 0 ? firstpart.reduce((a, b) => a + b) : 0;

    let secondpart = nums.slice(i + 1, nums.length);
    secondpart = secondpart.length > 0 ? secondpart.reduce((a, b) => a + b) : 0;

    if (firstpart === secondpart) {
      return i;
    }
  }
  return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
