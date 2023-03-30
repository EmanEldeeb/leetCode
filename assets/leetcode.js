//Length of Last Word
const lengthOfLastWord = function (s) {
  const sArray = s.trim().split(" ");
  return sArray[sArray.length - 1].length;
};

console.log(lengthOfLastWord("heelo worled "));

//217. Contains Duplicate
const containsDuplicate = function (nums) {
  const newNum = [...new Set(nums)];
  // if (nums.length - newNum.length >= 1) {
  //   return true;
  // } else return false;
  return nums.length - newNum.length >= 1 ? true : false;
};
console.log(containsDuplicate([1, 2, 2, 3]));
