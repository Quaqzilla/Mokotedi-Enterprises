import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Services from './pages/Services/Services';

const App = () => {
  return(
      <BrowserRouter basename='/Mokotedi-Enterprises'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/About-Us' element={<About/>}/>
          <Route path='/Our-Services' element={<Services/>}/>
        </Routes>
      </BrowserRouter>
  )
};

export default App;