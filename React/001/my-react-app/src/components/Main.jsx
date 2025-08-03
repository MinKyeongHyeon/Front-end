import { useEffect, useState } from "react"
import { Section } from "./Section"
export function Main (){
  const [products, setProducts] = useState([]);

    const fetchData = async () =>{
      try{
        const response = await fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/product');

        if(!response.ok){
          throw new Error(`HTTP error ${response.status}`);
        }

        const result = await response.json();
        setProducts(result);
      }
      catch{
        console.error(error);
        
      }
    }
    
    useEffect(()=>{
      fetchData(); //실행할코드
    },[]); // 배열이 비어있을때실행


  return (
    <main>
      <p>여기는 메인이지롱!</p>
      {products.map((product, index)=>{
        <Section key={product.id || index} number={index + 1} productData={product}/>
      })}
      
    </main>
  )
}