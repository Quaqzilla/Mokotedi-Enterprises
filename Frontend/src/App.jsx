import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';

const App = () => {
  return(
      <BrowserRouter basename='/Mokotedi-Enterprises'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/About-Us' element={<About/>}/>
        </Routes>
      </BrowserRouter>
  )
};

export default App;