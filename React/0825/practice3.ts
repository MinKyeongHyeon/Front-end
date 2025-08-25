//객체 타입. 다음 객체에 적잘한 타입을 지정해보세요.
type Book ={
  title: string;
  author:string;
  pages:number;
  isAvailable:boolean;
}

let book:Book = {
    title: "TypeScript 입문",
    author: "홍길동",
    pages: 300,
    isAvailable: true
};

// 인터페이스 정의 사용자 정보를 나타내는 인터페이스를 정의해보세요.
interface User{
  name:string;
  email:string;
  age:number;
}
let user:User={
  name: "민경현",
  email:"28599@naver.com",
  age:22,
}

//종합 문제 다음 요구사항에 맞는  함수를 작성해보세요
//함수명 getInfo
//매개변수 name문자열 age숫자, isStudent불리언.선택적
//반환값 {name:string,age:number,status:string}형태의 객체
//status는 isStudent가 true면 학생, false나 없으면 일반
interface Student{
  name: string;
  age:number;
  isStudent?:boolean;
}
interface isStudent{
  name:string;
  age:number;
  status:string;
}

function getInfo(name: string, age: number, isStudent?: boolean): { name: string; age: number; status: string } {
  return {
    name,
    age,
    status: isStudent ? "학생" : "일반"
  };
}