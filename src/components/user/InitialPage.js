import React from 'react';
import {Link} from 'react-router-dom';

const InitialPage = ()=> (
  <div style={{margin: "10%"}}>
    <Link to="/loan_form" className="ui button primary">New Loan Application</Link>
  </div>
)

export default InitialPage