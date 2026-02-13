

import Navbar from "../components/NavBar.jsx";

import Home from "../pages/Home.jsx";
import Work from "../pages/Work.jsx";

import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
