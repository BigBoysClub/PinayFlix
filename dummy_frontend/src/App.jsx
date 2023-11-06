import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom"
import AuthStore from "./stores/AuthStore"

function App() {

  const { user } = AuthStore()
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home/> : <Navigate to="/login" />} />
          <Route path="/signup" element={ user ? <Navigate to="/" /> : <Signup/>} />
          <Route path="/login" element={ user ? <Navigate to="/" />: <Login/>} />
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
