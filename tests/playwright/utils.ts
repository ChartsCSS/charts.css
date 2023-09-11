function generateCombinations(variations: string[]): string[] {
  let combinations: string[] = [];

  function allArrayCombinations(list: string[] = [], prefix: string = '') {
    for (let i = 0; i < list.length; i++) {
      const text: string = (`${prefix} ${list[i]}`).trim();
      combinations.push(text);
      allArrayCombinations(list.slice(1).slice(i), text);
    }
  }

  allArrayCombinations(variations);

  return combinations;
}

export default generateCombinations;
