type User = {
  readonly id:number;
  name: string;
  email?:string;
}

type Product ={
  name: string;
  price: number;
}
type Discount = {
  discountRate:number;
}
type DiscountedProduct = Product & Discount