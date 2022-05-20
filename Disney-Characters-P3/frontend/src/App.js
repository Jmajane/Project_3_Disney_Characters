import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Character from './Pages/Character';
import CharacterInfo from './Pages/CharacterInfo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {

  const [ bg, setBG ] = useState("https://wallpaperboat.com/wp-content/uploads/2019/05/disney-christmas-3.jpg")

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <Header />
      <Routes>
            <Route path='/' element={<Character setBG={setBG} bg={bg}/>} />
            <Route path='/:id' element={<CharacterInfo setBG={setBG} bg={bg}/>} />
            <Route path='/about' element={<About setBG={setBG} bg={bg}/>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
