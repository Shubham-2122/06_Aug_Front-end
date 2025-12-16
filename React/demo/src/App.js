import React from "react";
import Boots from "./Boots/Boots";
import ReacData from "./Boots/ReacData";
import Footer from "./Boots/Footer";
import Login from "./Boots/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import NotFound from "./Layout/Pages/NotFound";
import About1 from "./Layout/Pages/About1";
import AboutD2 from "./Layout/Pages/AboutD2";
import LifeData from "./LifeData";
// import ClassCompo from "./Component/ClassCompo";
// import FuncCompo from "./Component/FuncCompo";
// import Hello from "./jsx/Hello";
// import Style from "./style/Style";
// import MainProps from "./Props/MainProps";
// import MainState from "./State/MainState";
// import UseAx from "./Useeffect/UseAx";
// import UseCard from "./Useeffect/UseCard";
// import MainData from "./context/MainData";

function App() {
    return (
        <BrowserRouter>
        <div>
            {/* <h1>Hello this app page</h1> */}
            {/* component */}
            {/* <ClassCompo /> */}
            {/* <FuncCompo /> */}

            {/* jsx  */}
            {/* <Hello /> */}

            {/* style */}
            {/* <Style /> */}

            {/* props */}
            {/* <MainProps /> */}

            {/* state */}
            {/* <MainState /> */}
            {/* <UseAx /> */}
            {/* <UseCard /> */}

            {/* context */}
            {/* <MainData /> */}

            {/* <Boots /> */}
            {/* <ReacData /> */}
            {/* <Footer /> */}
            {/* <Login /> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} >
                    <Route path="about1" element={<About1 />} />
                     <Route path="about2" element={<AboutD2 />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/life" element={<LifeData />} />

                 <Route path="*" element={<NotFound />} />
            </Routes>


        </div>
        </BrowserRouter>
    )
}

export default App