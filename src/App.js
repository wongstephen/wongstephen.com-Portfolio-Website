import { useRef } from "react";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  const ref = useRef(null);
  function handleClick() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="">
      <div className="main__container">
        <Header clickEvent={handleClick} />
        <main>
          <div
            className="w-11/12 h-[1px] mx-auto my-24
           bg-slate-500/20"
          ></div>
          <Projects />
          <div
            className="w-11/12 h-[1px] mx-auto my-24
           bg-slate-500/20"
          ></div>{" "}
          <Contact refs={ref} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
