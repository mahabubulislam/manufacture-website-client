import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { GoArrowUp } from 'react-icons/go';
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/purchase/:id" element={<RequireAuth><Purchase/></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route index element={<MyProfile/>}></Route>
        </Route>
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
