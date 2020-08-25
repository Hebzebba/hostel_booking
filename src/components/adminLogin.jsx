import React, { useState} from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
} from "mdbreact";
import { adminLogin } from "../store/actions/actions";
import { connect } from 'react-redux';
import axios from 'axios'
import { Redirect } from "react-router-dom";




const AdminLogin = (props) => {

  const [email , setEmail] = useState('')
  const [ password, setPassword ] = useState('')
  
  const handleChange = e => { 
    setEmail(e.target.value);
  }

  const handleChangeP = e => { 
    setPassword(e.target.value)
  }

  const handleSubmit = e => { 
    e.preventDefault();
    // props.dispatch(adminLogin(emial,password))
    axios.post('http://localhost:5000/adminlogin', {email,password})
      .then(res => { 
        localStorage.setItem('isAdmin', res.data.msg);
        localStorage.setItem('Admintoken', res.data.tokem);
      })
    .catch(err=>err)
  }
  
  if (localStorage.getItem('isAdmin') === 'Admin' && localStorage.getItem('Admintoken') != null) { 
    return <Redirect to="/dashboard"/>
  }
  else
  return (
    <MDBContainer className="d-flex justify-content-center w-auto" fluid>
      <MDBRow className="pt-5 ">
        <MDBCard style={{ width: "20rem" }} className="p-3">
          <MDBCol size="12" md="12">
            <form onSubmit={handleSubmit}>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                  label="Email"
                  icon="user"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={handleChange}
                  value={email}
                />
                <MDBInput
                  label="Password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  onChange={handleChangeP}
                  value={password}
                />
              </div>
              <div className="text-center">
                <MDBBtn className="btn text-light" type="submit">Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default connect()(AdminLogin);
