import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
    
    <div id="parallax-2" className="parallax">
     <div id="dim"> <Home />
      <Skills />
   
      <Projects />
       </div>
      <div id="parallax-3" className='parallax'>
        <Contact />
        </div></div>
    </div>
  );
}

export default App;
