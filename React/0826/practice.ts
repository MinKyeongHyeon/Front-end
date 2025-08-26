interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

// id 제외하는 interface를 만들어주세요.
//제외하는건 오밋
type OmitProduct = Omit<Product,'id'>;

// 모든 필드가 선택적이 되는 interface를 만들어주세요.
// 선택적인건 파셜
type PartialProduct = Partial<Product>;

// id, name, price만 포함이 되는 interface를 만들어주세요.
// 고르는거는 픽
type PickProduct = Pick<Product, 'id' | 'name' | 'price'>;

//---

interface Product2 {
  id: number;
  name: string;
  price: number;
  description?: string;
  category?: string;
}

// 모든 속성을 읽기 전용으로 만드는 Readonly<T> 구현
type Readonly<T> = readonly[P in keyof T]:T[P]

// 모든 속성을 필수로 만드는 Required<T> 구현
type Required<T> = [P in keyof T]-?: T[P]