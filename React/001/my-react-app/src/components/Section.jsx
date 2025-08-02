import { useState } from "react";
export function Section ({number}){
  const [data, setData] = useState([]); // state to hold the fetched data

  function Card(props){
    return(
      <div>
        <h3>{props.title}</h3>
        <img src={props.imageUrl} alt={props.title}/>
        <p>{props.price}원</p>
      </div>
    )
  }

  const fetchData = async ()=>{
    try{
      const response = await fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/product');
      const data = await response.json();
      if(!response.ok){
        throw new Error(`HTTP 에러! 상태 ; ${response.status}`);
      }
      setData(data); // set the fetched data to state
    }catch(error){
      console.log('통신에러',error)
    }
  }

  // fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h2>여기는 {number}번째 섹션이지롱!</h2>
      <p>이건 섹션에 들어갈 내용이지롱!</p>
      <>
      {data.length > 0 && Card({
        title: data[0].productName,
        price: data[0].price,
        imageUrl: data[0].thumbnailImg,
      })}</>
    </section>
  )
}