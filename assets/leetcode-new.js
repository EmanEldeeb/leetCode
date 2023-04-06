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

//724. Find Pivot Index
var pivotIndex = function (nums) {
  const numsTotal = nums.reduce((cur, pre) => cur + pre);
  console.log(numsTotal);

  let leftsum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (numsTotal - leftsum - nums[i] === leftsum) {
      return i;
    }
    leftsum += nums[i];
  }
  return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

//Find All Numbers Disappeared in an Array
var findDisappearedNumbers = function (nums) {
  let result = [];
  const set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i + 1)) {
      result.push(i + 1);
    }
  }
  return result;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
