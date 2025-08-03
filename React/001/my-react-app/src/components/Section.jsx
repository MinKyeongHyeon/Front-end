import { useState } from "react";

export function Section ({number, productData}){
  function Card(props){
    return(
      <div>
        <h3>{props.title}</h3>
        <img src={props.imageUrl} alt={props.title}/>
        <p>{props.price}원</p>
      </div>
    )
  }

  return (
    <section>
      <h2>여기는 {number}번째 섹션이지롱!</h2>
      <p>이건 섹션에 들어갈 내용이지롱!</p>
      
      {/* productData가 있으면 Card 렌더링 */}
      {productData && Card({
        title: productData.productName,
        price: productData.price,
        imageUrl: productData.thumbnailImg,
      })}
    </section>
  )
}