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
import AddReview from "./Pages/Dashboard/AddReview";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Blogs from "./Pages/Blogs/Blogs";
import Shop from "./Pages/Shop/Shop";
import Portfolio from "./Pages/Portfolio/Portfolio";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import useAdmin from "./hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import AdminPanel from "./Pages/Dashboard/AdminPanel";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="shop/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={admin? <AdminPanel/> :<MyOrders />}></Route>
          <Route path="my-profile" element={<MyProfile />}></Route>
          <Route path="my-orders" element={<MyOrders />}></Route>
          <Route path="add-review" element={<AddReview />}></Route>
          <Route path="add-products" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path="manage-orders" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
          <Route path="all-users" element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        style={{ background: '#20AFB3' }}
        component={<GoArrowUp className="block w-10 text-white text-3xl"></GoArrowUp>}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
