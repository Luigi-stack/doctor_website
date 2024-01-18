import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage'
import NavBarTop from './Components/NavBarTop';
import NeedHelp from './Components/NeedHelp';
import Services from './Components/Services';
import OurTeam from './Components/OurTeam'
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <NavBarTop />
              <HomePage />
              <NeedHelp />
              <Footer />
            </>} />

          <Route path="/services" element={
            <>
              <NavBarTop />
              <Services />
              <NeedHelp />
              <Footer />
            </>} />

          <Route path="/team" element={
            <>
              <NavBarTop />
              <OurTeam />
              <NeedHelp />
              <Footer />
            </>} />

          <Route path="/contact" element={
            <>
              <NavBarTop />
              <ContactUs />
              <NeedHelp />
              <Footer />
            </>} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
