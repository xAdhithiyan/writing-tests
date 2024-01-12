function caesarCipher(str, key) {
  let newStr = '';
  for (let i = 0; i <= str.length - 1; i++) {
    let charcode = str.charCodeAt(i);
    if (charcode + key > 122) {
      charcode = charcode - 122 + 96;
    } else if (charcode + key > 90 && charcode + key < 97) {
      charcode = charcode - 90 + 64;
    }
    newStr += String.fromCharCode(charcode + key);
  }
  return newStr;
}
export default caesarCipher;
