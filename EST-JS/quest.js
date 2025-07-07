let array = [1, 2, 2, 3, 3, 3, 4, 5];
function solution(array) {
  array.map((a, b) => {
    a === a + 1 ? b++ : b;
  });
}
console.log(solution(array));
