// 1. 배열과 함수
// [1,2,3,4,5] 배열을 만들고, 모든 값을 2배로 만든 새 배열을 반환하는 함수 doubleArray를 작성하세요.
const arr = [1,2,3,4,5];
const doubleArray = arr.map(a=>a*2)
console.log(doubleArray)
// 2. 생성자 함수
// 이름과 나이를 받아 Person 객체를 만들고, introduce 메서드로 자기소개를 하게 하세요.
function Person (name,age){
    this.name = name;
    this.age = age;
    this.introduce = function(){
        console.log(`hello, ${this.name}`)
    }
}
// 3. 클래스
// 위 Person을 class 문법으로 다시 작성하세요.
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`hello, ${this.name}`)
    }
}
// 4. 배열과 객체 활용
// 여러 명의 Person을 배열에 담고, 모두 introduce 하게 하세요.
const p1 = new Person('지지', 18);
const p3 = new Person('빙키', 18);
const p2 = new Person('고스트', 18);

const people = [p1, p2, p3];
people.forEach(a => a.introduce())
// 5. 클로저
// 이름, 나이, 비밀번호를 받아 SecretPerson을 만들고, 
// checkPassword로만 비밀번호를 확인할 수 있게 하세요.
function SecretPerson(name, age, password) {
    this.name = name;
    this.age = age;
    let _password = password;
    this.checkPassword = function(input) {
        return input === _password;
    }
}
const sPerson = new SecretPerson('빙키',20,'1234')

console.log(sPerson.checkPassword('1234'))
