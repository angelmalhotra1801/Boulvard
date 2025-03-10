import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import AnimatedTitle from "./components/AnimatedTitle.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
