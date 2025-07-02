import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing/Landing';

const App = () => {
  return(
      <BrowserRouter basename='/Mokotedi-Enterprises'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
  )
};

export default App;