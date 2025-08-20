import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, income } from "./store/index";

function App() {
  const { budjet, items } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incomeValue, setIncomeValue] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handleIncome = () => {
    dispatch(income(incomeValue));
  };
  const handleAddItem = () => {
    dispatch(addItem({ name: itemName, price: Number(itemPrice) }));
  };
  const mapItem = () => {
    return items.map((item, idx) => (
      <li key={idx}>
        이름: {item.name}/가격: {item.price}원
      </li>
    ));
  };
  const itemList = () => {
    if (items.length >= 1) {
      return mapItem();
    }
    return null;
  };

  const submit = () => {
    handleIncome();
    handleAddItem();
  };
  const totalPrice = items.reduce((p, c) => p + Number(c.price), 0);
  const leftAcount = budjet - totalPrice;
  return (
    <>
      <h1>가 계 부</h1>
      <label htmlFor="income">나의 수익: </label>
      <input
        type="number"
        name="income"
        id="income"
        onChange={(e) => setIncomeValue(e.target.value)}
      />
      <label htmlFor="itemName">물건 이름:</label>
      <input
        type="text"
        name="itemName"
        id="itemName"
        onChange={(e) => {
          setItemName(e.target.value);
        }}
      />
      <label htmlFor="itemPrice">물건 가격: </label>
      <input
        type="number"
        name="itemPrice"
        id="itemPrice"
        onChange={(e) => {
          setItemPrice(e.target.value);
        }}
      />
      <button type="button" onClick={submit}>
        지출 추가하기
      </button>
      <ul>{itemList()}</ul>
      <p>
        총 지출: <span>{totalPrice.toLocaleString()}</span>
      </p>
      <p>
        통장 잔고: <span>{leftAcount.toLocaleString()}</span>
      </p>
    </>
  );
}

export default App;
