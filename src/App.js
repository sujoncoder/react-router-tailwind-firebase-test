import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Sectret from "./Components/Secret/Sectret";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFounf/NotFound";


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/secret" element={<Sectret/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route/>
      </Routes>
    </>
  );
}

export default App;
