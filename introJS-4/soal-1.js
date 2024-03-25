const detectPalindrome = (teks) => {
   const word = teks.toLowerCase();
   let isPalindrome = false;
   for (let i = 0; i < word.length; i++) {
      for (let j = word?.length; j >= 0; j--) {
         word[i] !== word[j] ? (isPalindrome = false) : (isPalindrome = true);
      }
   }
   return isPalindrome === true
      ? `${teks} is Palindrome`
      : `${teks} isnt palindrome`;
};

console.log(detectPalindrome("Malam"));

const reverseWords = (teks) => {
   let results = "";
   const word = teks?.split(" ");
   for (let i = word?.length - 1; i >= 0; i--) {
      results += word[i] + " ";
   }
   return results;
};

console.log(reverseWords("Saya belajar Javascript"));
