import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./header";
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
  MDBIcon,
  MDBBtn,
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

        <div className="container-fluid pt-3">
          <MDBRow>
            {datalist.map((data) => (
              <MDBCol md="4" className="mt-3">
                <MDBCard cascade>
                  <MDBCardImage
                    cascade
                    className="img-fluid"
                    overlay="white-light"
                    hover
                    src={data.hostel_image}
                  />
                  <Link to={`/details/${data._id}`}>
                    <MDBBtn
                      floating
                      tag="a"
                      className="ml-auto mr-4 lighten-3 mdb-coalor"
                      action
                    >
                      <MDBIcon
                        icon="chevron-right"
                        className="mdb-color lighten-3"
                      />
                    </MDBBtn>
                  </Link>
                  <MDBCardBody cascade>
                    <MDBCardTitle>{data.hostel_name}</MDBCardTitle>
                    <hr />
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                  </MDBCardBody>
                  <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                    <ul className="list-unstyled list-inline font-small">
                      <li className="list-inline-item pr-2 text-light">
                        Price : {data.price}
                      </li>
                    </ul>
                  </div>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
      </div>
    </>
  );
};

export default Rooms;
