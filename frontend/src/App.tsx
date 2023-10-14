import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import logo from "./asset/logo.jpg";
import TabLinks from './Components/TabLinks';
import HorizontalLine from './Components/HorizontalLine';
import PaymentPage from './pages/payments/success/PaymentPage';
import PromptPay from './pages/payments/PromptPay/PromptPay';
import Cards from './pages/payments/Card/Card';
import PaymentPrompt from './pages/payments/success/PaymentPrompt';

import Dentral from './pages/service/Dentral';

import Listpayment from './pages/admin';
import Createmember from './pages/member';
import Payment from './pages';

function App() {
   return (
    
    <Router>
      <div className={"App"}>
        <Header />
        <div className="tab-bar">
          <img src={logo} alt="โลโก้" className="logo" />
        </div>
        <TabLinks />
        <HorizontalLine />
        </div>  
       


        
      <Routes>
          <Route path="/เบอร์" element={<Payment />} />
          <Route path="/logout" element={<Createmember/>} />
          <Route path="/member" element={<Listpayment />}> /</Route>
          <Route path="/Dentral" element={<Dentral />}> /</Route>
          <Route path="/Card" element={<Cards />} />
          <Route path="/Card/PromptPay" element={<PromptPay />}></Route>
          <Route path="/Card/PaymentPage" element={<PaymentPage />}>  
          </Route>
          <Route path="/Payment/PaymentPrompt" element={<PaymentPrompt />}></Route>
        </Routes>
    </Router>
  );
 }

export default App;