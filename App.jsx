import React from "react";
import Info from "./components/Info";
import Interests from "./components/Interests";
import About from "./components/About";
import Footer from "./components/Footer";
import Spline from "./components/Spline"

export default function App() {
  return (
    <div>
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
        <Spline />
    </div>
  );
}
