import { Routes, Route } from "react-router-dom";
import '../src/styles/App.css'
import Home from './pages/Home_page.jsx'

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
