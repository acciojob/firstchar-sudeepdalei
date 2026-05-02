function firstChar(text) {
  if (text === "") return "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      return text[i];
    }
  }

  // If only spaces
  return "";
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));