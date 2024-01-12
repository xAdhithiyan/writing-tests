function ReverseString(str) {
  let newStr = '';
  // eslint-disable-next-line
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
export default ReverseString;
