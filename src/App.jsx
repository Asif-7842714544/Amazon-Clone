import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import React from "react";
import CheckOut from "./Components/CheckOut";
import LoginPage from "./Components/LoginPage";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./firebaseConfig";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

   auth.onAuthStateChanged((authUser) => {
      console.log("AuthUser", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <CheckOut />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
