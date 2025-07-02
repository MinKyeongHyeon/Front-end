const nums = [1, 2, 3, 4, 5];
//3이라면 찍지 말기
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 3) continue;
  console.log(nums[i]);
}

let result = [];
//for문을 이용해서, nums의 배열 요소를 모두 result로 넣을건데, 홀수 번째만 넣기
for (let i = 0; i <= nums.length; i++) {
  if (i % 2) continue;
  result.push(nums[i]);
}
console.log(result);
