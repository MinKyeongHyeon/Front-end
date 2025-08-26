// TODO: Non-Null 단언을 사용하여 아래 코드를 완성하세요.
const $input = document.querySelector("input")!;
// $input의 value를 콘솔에 출력하세요.
console.log($input.value);

// TODO: 아래 JSON 데이터를 파싱하고 타입 단언을 사용하여
// name과 age를 안전하게 접근할 수 있도록 만드세요.
const data = '{"name": "Jane", "age": 25}';
const res = JSON.parse(data) as { name: string; age: number };

// TODO: 학생의 과목별 성적을 저장할 수 있는 인터페이스를 만드세요
// 학생의 이름은 필수이며, 나머지 과목들은 동적으로 추가될 수 있습니다
interface IStudentData {
  name: string;
  [subject: string]: string | number | boolean;
}

interface Car {
  brand: string;
  model: string;
  year: number;
}
// TODO: Car 인터페이스의 속성 중 하나를 인자로 받아
// 해당 속성의 값을 반환하는 함수를 작성하세요.

type CarKeys = keyof Car;
function getCarData(car: Car, key: CarKeys) {
  return car[key];
}

//Enum 과 타입 활용 - 주문 상태 관리
// 온라인 쇼핑몰의 주문 상태를 관리하는 시스템을 만드세요.
// 주문 상태를 나타내는 enum을 정의하세요
enum OrderStatus {
  PENDING,
  CONFIRMED,
  SHIPPED,
  DELIVERED,
  CANCELED,
}

// 주문 인터페이스
interface Order {
  id: number;
  customerName: string;
  amount: number;
  status: OrderStatus;
  createdAt: Date;
}

//주문 상태를 문자열로 반환하는 함수를 만드세요
function getStatusText(status: OrderStatus): string {
  //switch문을 사용하여 구현하세요
  switch (status) {
    case OrderStatus.PENDING:
      return "대기중~";
    case OrderStatus.CONFIRMED:
      return "확인~";
    case OrderStatus.CANCELED:
      return "취소~";
    case OrderStatus.DELIVERED:
      return "배송~완료~";
    case OrderStatus.SHIPPED:
      return "배송중~~";
    default:
      return "에러~";
  }
}

//사용 예시
const order: Order = {
  id: 1,
  customerName: "고객님",
  amount: 50000,
  status: OrderStatus.PENDING,
  createdAt: new Date(),
};
console.log(getStatusText(order.status)); // 대기중 출력
