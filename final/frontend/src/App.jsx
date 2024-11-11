import { Navigate, Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';



import Topnavbar from "./landing/Topnavbar"
import AboutpgWrapper from "./landing/about/AboutpgWrapper";
import SupportpgWrapper from "./landing/support/SupportpgWrapper";
import PrdpgWrapper from "./landing/products/PrdpgWrapper";
import PricingpgWrap from "./landing/pricing/PricingpgWrap";
import Footer from './landing/Footer';
import Dashboard from './dashboard/components/Dashboard';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <>
    <BrowserRouter>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
     <Topnavbar/>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/about" element={<AboutpgWrapper />} />
        <Route path="/support" element={<SupportpgWrapper />} />
        <Route path="/products" element={<PrdpgWrapper />} />
        <Route path="/pricing" element={<PricingpgWrap />} /> 
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path="/dashboard/*" element={<PrivateRoute element={<Dashboard />} />} />
        </Routes>
      {/* <Footer/> */}
      </BrowserRouter>


      



          
          </>

  );
}

export default App;