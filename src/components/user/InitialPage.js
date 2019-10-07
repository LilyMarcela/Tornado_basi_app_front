import React from 'react';
import {Link} from 'react-router-dom';

const InitialPage = ()=> (
  <div>
    <Link to="/loan_form" className="ui button primary">New Loan Application</Link>
  </div>
)

export default InitialPage