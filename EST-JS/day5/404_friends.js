let friends = ['Irangi', 'Shoopa'];

function noName(name) {
  const index = friends.indexOf(name);
  if (index === -1) {
    console.log(`${name}은(는) 친구 목록에 없는 이름입니다.`);
    return true;
  }
  return false;
} // 내가 짠 유효성 검사.

function isValidName(name) {
  const index = friends.indexOf(name);
  if (index === -1) {
    console.log(`${name}은(는) 친구 목록에 없는 이름입니다.`);
    return false;
  }
  return index;
} // 강사님이 짜신 유효성 검사 .

function addFriend(name) {
  const index = isValidName(name);
  if (index !== false) {
    console.log(`${name}은(는) 이미 친구입니다.`);
    return;
  }
  friends.push(name);
  console.log(`${name}이 친구로 추가되었습니다.`);
}

function deleteFriend(name) {
  const index = isValidName(name);
  if (index === false) return;
  friends.splice(index, 1);
  console.log(`친구 ${name}이 삭제되었습니다.`);
}
function updateFriendName(name, newName) {
  const index = isValidName(name);
  if (index === false) return;
  friends.splice(index, 1, newName);
  console.log(`친구 ${name}이(가) ${newName}으로 수정되었습니다.`);
}

// Irangi , shoopa
deleteFriend('Shoopa');
console.log(friends);
updateFriendName('Irangi', 'Ghost');
console.log(friends);
addFriend('Shoopa');

console.log(friends);

// 예외처리 : 친구목록에 없는 이름을 입력했을경우의 예외처리를 해보세요.
// '친구 목록에  없는 이름입니다.' 출력
// '친구 'name'이 삭제되었습니다.' 출력

const arr = [1, 2, 3];
arr.push(4);
arr.splice(2, 1);

console.log(arr);
console.log(Boolean(-1));
