import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { GoArrowUp } from 'react-icons/go';
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        style={{background:'#20AFB3'}}
        component={<GoArrowUp className="block w-10 text-white text-3xl"></GoArrowUp>}
      />
    </div>
  );
}

export default App;
