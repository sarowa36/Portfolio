import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar.tsx"
import StarsCanvas from "./components/main/StarsBackground.tsx"; 
import About from "./components/About.tsx";
import Banner from "./components/Banner.tsx";
import Experience from "./components/Experience.tsx";
import Footer from "./components/Footer.tsx";
import Projects from "./components/Projects.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarsCanvas></StarsCanvas>
    <Navbar></Navbar>
    <main className="h-full w-full  bg-[url('../public/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
