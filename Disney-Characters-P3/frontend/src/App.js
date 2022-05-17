
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Character from './Pages/Character';
import CharacterInfo from './Pages/CharacterInfo';
import Header from './Components/Header'
import Footer from './Components/Footer';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
            <Route path='/' element={<Character />} />
            <Route path='/:id' element={<CharacterInfo />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
