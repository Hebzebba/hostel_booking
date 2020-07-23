import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";

import "antd/dist/antd.css";
import "../App.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardHeader,
} from "mdbreact";

import { fetchData } from "../store/actions/actions";

const Rooms = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.data);

  const { datalist, error, loading } = list;

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="container-fluid">
          <MDBRow>
            <MDBCol style={{ width: "100%" }}>
              <MDBCard reverse>
                <MDBCardImage
                  cascade
                  style={{ width: "100%", height: "20rem" }}
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                />
                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle>Our Hostels</MDBCardTitle>
                  <MDBCardText>
                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>

        <div className="container-fluid pt-3 m-auto">
          <MDBRow>
            {datalist.map((data) => (
              <MDBCol md="4" className="mt-2">
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src={data.hostel_image[0]}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardHeader>
                      <MDBCardTitle>{data.hostel_name} Hostel</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <p className="text-info">
                        Price : <b>{data.price}</b>
                      </p>
                      <p className="text-info">
                        Type : <b>{data.hostel_type}</b>
                      </p>
                    </MDBCardBody>
                    <MDBBtn gradient="blue" href={`/details/${data._id}`}>
                      Read more
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Rooms;
