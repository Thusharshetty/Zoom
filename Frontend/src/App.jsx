
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
