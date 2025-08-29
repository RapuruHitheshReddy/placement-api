function processData(data) {
  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let numericSum = 0;
  let alphaConcat = "";

  for (const item of data) {
    //  Check if numeric (only digits, optional minus sign)
    if (/^-?\d+$/.test(item)) {
      const num = parseInt(item, 10);
      if (num % 2 === 0) even_numbers.push(item);
      else odd_numbers.push(item);
      numericSum += num;
    }
    //  Check if purely alphabets
    else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      alphaConcat += item;
    }
    // ✅ Otherwise, special character
    else {
      special_characters.push(item);
    }
  }

  // 🔹 Build alternating caps reverse string
  const reversed = alphaConcat.split("").reverse();
  const concat_string = reversed
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: numericSum.toString(), // must be string
    concat_string
  };
}

module.exports = { processData };
