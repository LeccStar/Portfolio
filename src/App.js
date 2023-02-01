import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import "./App.css"
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from './components/Portfolio.jsx'
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="bodyContainer">
          <Sidebar/>
        <main>
          <Home />
          <About />
          <Resume/>
          <Portfolio/>
          <Contact/>
        </main>
      </div>
    </>
  );
}

export default App;