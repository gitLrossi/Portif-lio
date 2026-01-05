import { Routes, Route } from "react-router-dom";
import '../src/styles/App.css'
import Home from './pages/Home_page.jsx'
import Sobremim from "./pages/Sobremim.jsx";
import Contato from "./pages/Contato.jsx";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobremim/>}/>
        <Route path="/contato" element={<Contato/>}/>
     </Routes>
    </>
  )
}

export default App
