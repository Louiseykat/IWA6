const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

// Take a string that is a single character and return true if it is a digit
function isDigit(character) {
  if (character === "0") {
    return true;
  }
  if (character === "1") {
    return true;
  }
  if (character === "2") {
    return true;
  }
  if (character === "3") {
    return true;
  }
  if (character === "4") {
    return true;
  }
  if (character === "5") {
    return true;
  }
  if (character === "6") {
    return true;
  }
  if (character === "7") {
    return true;
  }
  if (character === "8") {
    return true;
  }
  if (character === "9") {
    return true;
  }
  return false;
}

// Take a string return true only if every single character in it is a digit
function isNumericString(value) {
  if (typeof value === "string") {
    for (const character of value) {
      if (!isDigit(character)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

// TODO: Change the code below to use the isNumericString function
const primaryValid = typeof primaryPhone === "number";
const secondaryValid = typeof secondaryPhone === "number";

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);