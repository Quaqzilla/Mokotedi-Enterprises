import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router';
import Landing from './pages/Landing/Landing';

const App = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>

        </Routes>
      </BrowserRouter>
  )
};

export default App;