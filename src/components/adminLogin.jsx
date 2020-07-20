import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
} from "mdbreact";

const AdminLogin = () => {
  return (
    <MDBContainer className="d-flex justify-content-center w-auto" fluid>
      <MDBRow className="pt-5 ">
        <MDBCard style={{ width: "20rem" }} className="p-3">
          <MDBCol size="12" md="12">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                  label="User name"
                  icon="user"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn className="btn text-light">Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default AdminLogin;
