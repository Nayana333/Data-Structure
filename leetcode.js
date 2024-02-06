function findDoubleSubstrings(inputStr) {
    const doubles = {};

    for (let i = 0; i < inputStr.length - 1; i++) {
        const substring = inputStr.substring(i, i + 2);
        if (doubles[substring]) {
            doubles[substring]++;
        } else {
            doubles[substring] = 1;
        }
    }

   
    const result = Object.fromEntries(Object.entries(doubles).filter(([_, count]) => count >= 2));

    return result;
}

const inputString = "aaobaakjaakkkaakkbb";
const result = findDoubleSubstrings(inputString);
console.log(result);
  