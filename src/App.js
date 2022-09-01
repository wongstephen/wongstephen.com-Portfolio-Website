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
    <div className="App">
      <NavBar />
      <div className="main__container">
        <Header clickEvent={handleClick} />
        <main>
          <Projects />
          <Contact refs={ref} />
        </main>
      </div>
    </div>
  );
}

export default App;
