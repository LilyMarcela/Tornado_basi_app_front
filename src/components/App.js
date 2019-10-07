
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import InitialPage from './user/InitialPage'
import LoanForm from './user/LoanForm';
import LoanResult from './user/LoanResult';
import Header from './Header'


const App = () => (
  <div>
    <Header/>
    <BrowserRouter>
      <Route path="/" component={InitialPage}/>
      <Route path="/loan_form" component={LoanForm}/>
      <Route path="/loan_result" component={LoanResult}/>
    </BrowserRouter>
  </div>
)

export default App
