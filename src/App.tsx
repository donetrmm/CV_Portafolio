import { Navigation } from './components/organisms/Navigation/Navigation';
import Hero from './components/organisms/Hero/Hero';
import { Footer } from './components/organisms/Footer/Footer';
import About from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Projects } from './pages/Projects/Projects';
import { Experience } from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
