import { useRef } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const ref = useRef(null);
  function handleClick() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="max-w-5xl mx-auto mb-24">
      <NavBar />
      <div className="main__container">
        <Header clickEvent={handleClick} />
        <main>
          <div className="w-11/12 h-[1px] mx-auto my-14 bg-slate-500/20"></div>
          <Projects />
          <div className="w-11/12 h-[1px] mx-auto my-14 bg-slate-500/20"></div>

          <Contact refs={ref} />
        </main>
      </div>
    </div>
  );
}

export default App;
