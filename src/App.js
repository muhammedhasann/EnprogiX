import logo from "./assets/img/logo.png";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Team } from "./components/Team";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Team/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
