import './App.scss';

import NavBar from './components/NavBar';
import Greet from './components/Greet';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';



function App() {
  return (
    <main className="App">
      <NavBar />
      <Greet />
 
      <MyWorks />
      <Contact />
      
    </main>
  );
}

export default App;
