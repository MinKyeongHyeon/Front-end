/**
 * 1. API fetch => 데이터 불러오기
 * 2. 함수 이름: fetchAllProducts
 * 3. 성공 응답 / 실패 응답 처리(에러 메세지는 재량)
 * 중요 포인트!
 * -함수의 리턴 타입 정의
 *
 */

import type { Product } from "../types/index";

async function fetchAllProducts(): Promise<Product[]> {
  const BASE_URL = "https://dev.wenivops.co.kr/services/fastapi-crud/1/product";
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error("으악!");
    }
    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.log(error, "으아악!으아악! 에러발생!");
    return [];
  }
}
export default fetchAllProducts;
