import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const total = items.reduce((s, v) => s + v.price, 0);

  return (
    <main>
      <section>
        <h2>Cart({items.length})</h2>

        <article>
          {items.length === 0 ? (
            <div>장바구니에 암것두 없어유..</div>
          ) : (
            <div>
              {items.map((item) => {
                return (
                  <div key={item.id}>
                    <p>
                      <span>{item.name}</span>-
                      <span>{item.price.toLocaleString()}</span>원
                    </p>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_ITEM", id: item.id })
                      }
                    >
                      제거
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          <p>{total.toLocaleString()}원</p>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            싹 다 지워부러
          </button>
        </article>
      </section>
    </main>
  );
}

export default Cart;
