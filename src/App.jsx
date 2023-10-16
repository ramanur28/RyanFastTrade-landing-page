import "./style/reset.css";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
