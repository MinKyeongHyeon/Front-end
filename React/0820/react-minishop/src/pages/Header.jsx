import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const items = useSelector((state) => state.items);
  return (
    <header>
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart({items.length})</Link>
      </nav>
    </header>
  );
}

export default Header;
