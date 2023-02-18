// Libraries
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

// Components

import Navigation from "./components/routes/navigation/navigation.component";

import Home from "./components/routes/home/home.component";

import Authentication from "./components/routes/authentication/authentication.component";

import Checkout from "./components/routes/checkout/checkout.component";

import Shop from "./components/routes/shop/shop.component";

// User Actions

import { setCurrentUser } from "./store/user/user.action";

// Utils

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

function App() {
  // react-redux dispatch function
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
