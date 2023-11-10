function palindrome(str) {
    let polishedString = str.replace(/\W+|_/g, "").toUpperCase();
    let reversedString = polishedString.split("").reverse().join("");
    console.log(reversedString, polishedString)
    if (polishedString != reversedString) {
      return false;
    }
    return true;
  }
  
  let result = palindrome("A man, a plan, a canal. Panama");
  console.log(result);