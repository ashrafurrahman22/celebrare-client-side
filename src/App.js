import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Navbar from "./Pages/Shared/Navbar";
import PageNotFound from "./Pages/Shared/PageNotFound";
import './App.css'

function App() {
  return (
    <div style={{
      fontFamily:"google sans",
      fontStyle:"italic",
      fontSize:"20px"
    }} className="lg:px-14 px-4 py-1">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
