import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage'
import NavBar from './Components/Navbar'
import NeedHelp from './Components/NeedHelp';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={
            <>
              <NavBar />
              <HomePage />
              <NeedHelp />
            </>} />

            <Route path="/services" element={
            <>
              <NavBar />
              <NeedHelp />
            </>} />

            <Route path="/team" element={
            <>
              <NavBar />
              <NeedHelp />
            </>} />

            <Route path="/contact" element={
            <>
              <NavBar />
              <NeedHelp />
            </>} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
