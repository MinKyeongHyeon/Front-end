function solution(babbling) {
  let arr = [];
  babbling.forEach(isInclude => {
    isInclude = isInclude.replace('aya', '_');

    isInclude = isInclude.replace('ye', '_');

    isInclude = isInclude.replace('woo', '_');

    isInclude = isInclude.replace('ma', '_');

    isInclude = isInclude.replaceAll('_', '');

    arr.push(isInclude.length > 0 ? 0 : 1);
  });
  result = arr.reduce((a, b) => a + b, 0);

  return result;
}
