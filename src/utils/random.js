/**
 * ref: https://stackoverflow.com/a/1349426/6053673
 * @param {number} length
 * @returns
 */
export function generateRandomString(length) {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
