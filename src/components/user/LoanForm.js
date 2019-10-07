import React, {Component} from 'react';
import { Button, Checkbox, Form, Header } from 'semantic-ui-react';
import apiRequest from '../../api/apiRequest';
import {Link} from 'react-router-dom';
class LoanForm extends Component {
  state = {
    companyName: "",
    firstName: "",
    lastName: "",
    amount: 0,
    status: ""
  }
  requestLoan = async() =>  {
    const { data } = await apiRequest.get(`/loan_response?value=${this.state.amount}`)
    this.setState({
      status: data
    })
    this.renderStatus()
  }
  handleSubmit = (event) => {
    this.requestLoan()
  }
  renderStatus = () => {
    return this.state.status !== "" &&
    (<div className="ui container" style={{marginTop: "10%"}}>
      <h2> The status of your loan is: {this.state.status} </h2>
      <div>
        <Button onClick={()=> this.setState({status: ""})} 
        className="ui button primary">New Loan Application</Button>
      </div>
      <div style={{marginTop: "10%"}} >
        <Link to="/">
          <i className="home icon"> Home</i>
        </Link>
      </div>
    </div>)
  }
  render(){
    return this.state.status === "" ? (
      <div className="ui text container">
        <Form onSubmit= {this.handleSubmit.bind(this)}>
        <div className="ui container">
          <Header as='h2' style={{marginTop: "5%", marginBottom: "5%"}}>
            Personal Information
          </Header>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name'value={ this.state.firstName} onChange={event => 
              this.setState({ firstName: event.target.value })} />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' value={ this.state.lastName} onChange={event => 
              this.setState({ lastName: event.target.value })}/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Email</label>
              <input placeholder='email' value={ this.state.email} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
            <Form.Field>
              <label>SSN</label>
              <input placeholder='SSN' value={ this.state.ssn} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>City</label>
              <input placeholder='city' value={ this.state.city} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
            <Form.Field>
              <label>State</label>
              <input placeholder='states' value={ this.state.states} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
            <Form.Field>
              <label>Postal Code</label>
              <input placeholder='postCode' value={ this.state.postCode} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label> Phone Number</label>
              <input placeholder='phone' value={ this.state.phone} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
            <Form.Field>
              <label> Address</label>
              <input placeholder='address' value={ this.state.address} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
          </Form.Group>
        </div>

        <div className="ui container">
        <Header as='h2' style={{marginTop: "5%", marginBottom: "5%"}}>
          Business Information 
        </Header>
        <Form.Group widths='equal'>
            <Form.Field>
              <label>Business Name</label>
              <input placeholder='busName' value={ this.state.busName} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
            <Form.Field>
              <label>Business Tax Id</label>
              <input placeholder='taxId' value={ this.state.taxId} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label> Business City</label>
              <input placeholder='busCity' value={ this.state.busCity} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
            <Form.Field>
              <label>Business State</label>
              <input placeholder='busState' value={ this.state.busState} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
            <Form.Field>
              <label>Business Postal Code</label>
              <input placeholder='busPostCode' value={ this.state.busPostCode} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label> Business Phone Number</label>
              <input placeholder='busPhone' value={ this.state.busPhone} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
            <Form.Field>
              <label> BusinessAddress</label>
              <input placeholder='busPhone' value={ this.state.busPhone} onChange={event => 
              this.setState({ amount: event.target.value })}/>
            </Form.Field>
          </Form.Group>
        </div>

        <div className="ui container"  style={{marginBottom: "5%"}}>
        <Header as='h2' style={{marginTop: "5%", marginBottom: "5%"}}>
          Amount
        </Header>
        <Form.Field>
            <label>Requested Amount</label>
            <input placeholder='amount' value={ this.state.amount} onChange={event => 
            this.setState({ amount: event.target.value })}/>
          </Form.Field>
        </div>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit' >Submit</Button>
        </Form>
      </div>
    ) : this.renderStatus()
  }
}

export default LoanForm