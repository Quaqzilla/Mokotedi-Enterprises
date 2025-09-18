import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';
import AI from './pages/AI/AI';

const App = () => {
  return(
      <BrowserRouter basename='/Mokotedi-Enterprises'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/About-Us' element={<About/>}/>
          <Route path='/Our-Services' element={<Services/>}/>
          <Route path='/Our-Work' element={<Work/>}/>
          <Route path='/Contact-Us' element={<Contact/>}/>
          <Route path='/ChatBot' element={<AI/>}/>
        </Routes>
      </BrowserRouter>
  )
};

export default App;