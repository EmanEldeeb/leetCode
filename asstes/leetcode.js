//Length of Last Word
const lengthOfLastWord = function (s) {
  const sArray = s.trim().split(" ");
  return sArray[sArray.length - 1].length;
};

console.log(lengthOfLastWord("heelo worled "));
