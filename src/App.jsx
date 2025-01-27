import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';

export default function App() {
  AOS.init();
  return (
    <>
    <Helmet>
      <meta name="description" content="Animately: Your destination for creating stunning animations effortlessly." />
    </Helmet>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>
    </Router>

    </>
  )
}