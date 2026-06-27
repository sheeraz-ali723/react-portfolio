import React from 'react'
import Navbar from './Components/Navbar' 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer';
import List from './Components/List'
import Contact from './Components/Contact'
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css"
import ContactForm from './Components/ContactForm';
import Explore from './Components/Explore';


const App = () => {
   useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []); 
  return (
    <>

<BrowserRouter>
<Navbar />

<Routes>
 <Route path="/" element={<Home/>} /> 
 <Route path='/About' element={<About/>} />
 <Route path='/Services' element={<Services/>} />
 <Route path='/Portfolio' element={<Portfolio/>} />
<Route path='/List' element={<List/>} />
<Route path='/Contact' element={<Contact/>} />
<Route path='/ContactForm' element={<ContactForm/>} />
<Route path='/Explore' element={<Explore/>} />




</Routes>
<Footer />
</BrowserRouter>





    </>
  )
}



export default App