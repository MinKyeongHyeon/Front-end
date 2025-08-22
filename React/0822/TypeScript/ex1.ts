// 여기에 알맞은 타입을 지정하세요
let userName:string = "김개발";
let userAge:number = 25;
let isStudent:boolean = true;
let numbers:number[] = [1, 2, 3, 4, 5];
let tuple:[string, number] = ["typescript", 100];


// 2.2 타입 추론 이해하기
// 다음 코드에서 발생할 수 있는 타입 관련 오류를 찾고 수정해보세요.
let value = "Hello";
value = "42";
 
let numbers = [1, 2, 3];
numbers.push(4);
 
let mixed = [1, "two", 3];
mixed.push("true");

// 2.3 void와 never 이해하기
// 다음 함수들의 반환 타입을 올바르게 지정해보세요.

// 적절한 반환 타입을 지정하세요
function logMessage(message:string):void {
    console.log(message);
}
 
function throwError(message:string):never {
    throw new Error(message);
}
 
function infiniteLoop():never {
    while (true) {
        console.log("무한 루프");
    }
}

// 2.4 변수 순회하기
// 다음 변수를 순회하면서 하나씩 출력하는 코드를 작성하세요.
const fruits:string[]=["apple", "banana", "cherry"];
for (const fruit of fruits){console.log(fruit)}