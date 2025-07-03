const users = [
  { nickName: 'Irangi', role: 'admin', email: 'irangi@gmail.com' },
  { nickName: 'Ghost', role: 'superAdmin', email: 'ghost@gmail.com' },
  { nickName: 'shoopa', role: 'user', email: 'shoopa@naver.com' },
  { nickName: 'Camel', role: 'user', email: 'camel@kakao.com' },
  { nickName: 'Mui', role: 'user', email: 'mui@naver.com' },
];
const posts = [
  { title: 'Javascript', tags: ['JS', 'ES6', 'NodeJS'] },
  { title: 'React', tags: ['React', 'Redux', 'Hooks'] },
  { title: 'Vue', tags: ['Vue', 'Vuex', 'Vue Router'] },
];

// users에서 admin 권한을 가진 사용자의 이름을 출력 / 사용자의 이름은 알파벳순으로 정렬해서 배열로 반환.
// admin 권한 -> superAdmin , admin

const Admin = users
  .filter(x => x.role.toLowerCase().includes('admin'))
  .map(x => x.nickName)
  .sort((a, b) => a.localeCompare(b));
console.log(Admin);

//2 users에서 일반유저가 몇 명인지 출력. ->일반유저는 총 3명입니다.

const normal = users.filter(x => x.role.includes('user'));
console.log(`일반유저는 총${normal.length}명입니다.`);

const names = users.map(x => x.nickName);
console.log(names);

//3 태그 목록을 출력하시오 최종변수 tagList에 넣어서 출력
const tagList = posts
  .map(x => x.tags)
  .flat(1)
  .join();
console.log(tagList);
