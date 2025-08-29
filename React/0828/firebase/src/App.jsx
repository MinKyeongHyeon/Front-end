import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Header from "./components/Header/Header";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      {isAuthReady ? (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" replace={true} />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="" replace={true} />}
            />
          </Routes>
        </BrowserRouter>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default App;
