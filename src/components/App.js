
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import InitialPage from './user/InitialPage'
import LoanForm from './user/LoanForm';
import Header from './Header'


const App = () => (
  <div>
    <Header/>
    <BrowserRouter>
      <Route path="/" exact component={InitialPage}/>
      <Route path="/loan_form" component={LoanForm}/>
    </BrowserRouter>
  </div>
)

export default App
