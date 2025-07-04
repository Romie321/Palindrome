function palindrome(str) {
  let lowerCaseStr = str.toLowerCase();
  let lettersArr = lowerCaseStr.match(/[a-z0-9]/g);
  let reverseArr = lettersArr.toReversed();

  for(let i = 0; lettersArr.length; i++) {
    if(reverseArr[i] !== lettersArr[i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("not a palindrome"));
