import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import SingleUser from "./pages/SingleUser";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [passvalue, setPassValue] = useState([]);

  const onFetchData = (el) => {
    setPassValue(el);
  };

  return (
    <HashRouter>
      <div className="App">
        <Header fetchData={onFetchData} />

        <Routes>
          <Route path="/" element={<Home items={passvalue} />} />
          <Route path="/user/:id" element={<SingleUser />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
