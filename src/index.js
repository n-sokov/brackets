module.exports = function check(str, bracketsConfig) {
  // your solution

  const result = [];
  const pairsOfBrackets = new Map(bracketsConfig);

  for (const char of str) { 
    if (pairsOfBrackets.get(result.at(-1)) == char) { 
      result.pop(); 
    } else { 
      result.push(char);
    }
  }
  return result.length === 0;
}
