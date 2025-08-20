import { useDispatch, useSelector } from "react-redux";
import { PRODUCTS } from "../data/Products";

function Shop() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <main>
      <section>
        <h2>Shop</h2>
        {PRODUCTS.map((product) => {
          const 카트에들어있니 = items
            .map((item) => item.id)
            .includes(product.id);
          return (
            <article key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString()}원</p>
              <button
                onClick={() => dispatch({ type: "ADD_ITEM", item: product })}
                disabled={카트에들어있니}
              >
                {카트에들어있니 ? "담김" : "장바구니 담기"}
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Shop;
