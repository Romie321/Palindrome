const resultElement = document.getElementById("result");
const inputElement = document.getElementById("inputString");
const button = document.querySelector("button");
const palindromeChecker = document.querySelector(".palindrome_checker");
const feedback = document.querySelector(".feedback");

inputElement.addEventListener("input", () => {
  resultElement.textContent =
    "Check if the word or phrase entered is a palindrome.";
});

button.addEventListener("click", () => {
  const isPalindrome = palindrome(inputElement);
  resultElement.textContent = isPalindrome;
});

button.addEventListener("click", () => {
  resultElement.classList.toggle("changed");
});

inputElement.addEventListener("input", () => {
  resultElement.classList.remove("changed");
});

function palindrome(inputElement) {
  let lowerCaseStr = inputElement.value.toLowerCase();
  let lettersArr = lowerCaseStr.match(/[a-z0-9]/g);
  let reverseArr = lettersArr.toReversed();

  for (let i = 0; i < lettersArr.length; i++) {
    if (reverseArr[i] !== lettersArr[i]) {
      return "Sorry, it's not a palindrome.";
    }
  }
  return "Congratulations! It's a palindrome!";
}

//console.log(palindrome("not a palindrome"));
