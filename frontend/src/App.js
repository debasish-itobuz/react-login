import './App.css';
import Home from './pages/Home/Home'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
