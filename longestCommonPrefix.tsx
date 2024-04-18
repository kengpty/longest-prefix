function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  strs.sort((x, y) => x.length - y.length);
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

console.log(longestCommonPrefix(["dog", "racecar", "car"]));

console.log(longestCommonPrefix(["dog", "doi", "dox"]));
