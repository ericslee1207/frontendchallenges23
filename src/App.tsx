import "./App.css";

import Nav from "./components/Nav";
import Courses from "./components/Courses";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import allReducers from "./reducers";
import { Routes, Route } from "react-router-dom";
import Receipts from "./components/Receipts";

function App() {
  const store = createStore(allReducers);
  return (
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/receipts" element={<Receipts />} />
      </Routes>
    </Provider>
  );
}

export default App;
