
import './App.css'
import {Route, Routes} from 'react-router-dom';
import Index from './pages/index';
import Qr from "./pages/qr";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/qr" element={<Qr/>} />
    </Routes>

  )
}

export default App
