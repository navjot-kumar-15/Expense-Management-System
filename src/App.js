import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import RegisterPage from "./Pages/Register/RegisterPage";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />{" "}
              </ProtectedRoute>
            }
          />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export function ProtectedRoute() {``
  if (localStorage.getItem("users")) {
    return <HomePage />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
