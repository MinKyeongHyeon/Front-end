import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
