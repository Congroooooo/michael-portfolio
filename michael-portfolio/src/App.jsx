import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Footer from './components/Footer/Footer';
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
