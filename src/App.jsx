import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import { Navbar } from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import SignUpUser from "./pages/Authentication/SignUpUser";
import SignInUser from "./pages/Authentication/SignInUser"; 

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="signup" element={<SignUpUser />} />
            <Route path="signin" element={<SignInUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
    </QueryClientProvider>
  );
}

export default App;
