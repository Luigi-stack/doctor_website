import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Components/HomePage'
import NavBar from './Components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <HomePage />
            </>} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
