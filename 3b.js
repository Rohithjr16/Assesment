const stringArray = ["hello world", "this is a test", "javascript is awesome"];

const titleCaseArray = stringArray.map(str => {
  const words = str.split(" ");
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
});

console.log(titleCaseArray);
