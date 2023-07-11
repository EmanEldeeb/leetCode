//58. Length of Last Word -- run time 57ms
const lengthOfLastWord = function (s) {
  const sArray = s.trim().split(" ");
  return sArray[sArray.length - 1].length;
};

console.log(lengthOfLastWord("heelo worled "));

//217. Contains Duplicate -- run time 97ms
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

//1. Two Sum -- run time 85ms
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

//27. Remove Element --  run time 63ms
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

//724. Find Pivot Index -- run time 79ms
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

//448. Find All Numbers Disappeared in an Array -- run time 122ms
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

//118. Pascal's Triangle -- run time 47 ms
var generate = function (numRows) {
  let result = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;
    for (let j = 1; j < row.length - 1; j++) {
      let aboveRow = result[i - 1];
      row[j] = aboveRow[j - 1] + aboveRow[j];
    }
    result[i] = row;
  }

  return result;
};

console.log(generate(5));

//242. Valid Anagram -- run time 89 ms
var isAnagram = function (s, t) {
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  return sortedS === sortedT ? true : false;
};

console.log(isAnagram("anagram", "nagaram"));

//392. Is Subsequence -- 70 ms
var isSubsequence = function (s, t) {
  let sIndex = 0;
  if (s.length == 0 && t.length == 0) return true;
  for (let i = 0; i < t.length; i++) {
    if (s[sIndex] === t[i]) sIndex++;

    if (sIndex === s.length) return true;
  }
  return false;
};

console.log(isSubsequence("abxc", "ahbgdc"));

// Removing Stars From a String --100ms

var removeStars = function (s) {
  const arr = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] == "*" && arr.length) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join("");
};

//20. Valid Parentheses -- 70ms
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (
        !stack.length ||
        (s[i] === ")" && stack[stack.length - 1] !== "(") ||
        (s[i] === "}" && stack[stack.length - 1] !== "{") ||
        (s[i] === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length == 0;
};

//682. Baseball Game --58 ms
var calPoints = function (operations) {
  let stack = [];
  let result = 0;
  for (let i = 0; i < operations.length; i++) {
    if (
      operations[i] !== "C" &&
      operations[i] !== "D" &&
      operations[i] !== "+"
    ) {
      stack.push(+operations[i]);
    } else if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      const double = 2 * stack[stack.length - 1];
      stack.push(double);
    } else if (operations[i] === "+" && stack.length >= 2) {
      const added = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(added);
    }
  }
  for (const num of stack) {
    result += num;
  }
  return result;
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));

//Evaluate Reverse Polish Notation --82 ms
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] !== "+" &&
      tokens[i] !== "-" &&
      tokens[i] !== "*" &&
      tokens[i] !== "/"
    ) {
      stack.push(+tokens[i]);
    }

    if (stack.length >= 2 && tokens[i] === "+") {
      let second = stack.pop();
      let first = stack.pop();

      stack.push(first + second);
    }
    if (stack.length >= 2 && tokens[i] === "-") {
      let second = stack.pop();
      let first = stack.pop();

      stack.push(first - second);
    }
    if (stack.length >= 2 && tokens[i] === "*") {
      let second = stack.pop();
      let first = stack.pop();
      stack.push(first * second);
    }
    if (stack.length >= 2 && tokens[i] === "/") {
      let second = stack.pop();
      let first = stack.pop();
      let dev = Math.trunc(first / second);
      stack.push(dev);
    }
  }
  return stack[0];
};
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
