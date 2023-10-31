import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Auth/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
