import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage'
import NavBar from './Components/Navbar'
import NeedHelp from './Components/NeedHelp';
import Services from './Components/Services';
import OurTeam from './Components/OurTeam'
import ContactUs from './Components/ContactUs';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <HomePage />
              <NeedHelp />
            </>} />

          <Route path="/services" element={
            <>
              <NavBar />
              <Services />
              <NeedHelp />
            </>} />

          <Route path="/team" element={
            <>
              <NavBar />
              <OurTeam />
              <NeedHelp />
            </>} />

          <Route path="/contact" element={
            <>
              <NavBar />
              <ContactUs />
              <NeedHelp />
            </>} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
