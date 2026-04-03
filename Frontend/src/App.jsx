
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import VideoComponent from './pages/VideoComponent';
import History from './pages/History';
import { AuthProvider } from './contexts/AuthContext';

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/:url' element={<VideoComponent />}></Route>
       
          <Route path='/history' element={<History/>}></Route>
        
      </Routes>
      </AuthProvider>
      
    </BrowserRouter>
  )
}

export default App
