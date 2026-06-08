import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Divider from './components/Divider';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Services />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
