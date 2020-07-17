import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";

import { Button, Collapse } from "antd";

import { fetchData } from "../store/actions/actions";

const Rooms = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.data);

  const { datalist, error, loading } = list;

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="hero-component">
          <div className="hero-text-container">
            <h2 className="hero-text">We Deliver a Better Service</h2>
          </div>
        </div>

        <div className="featured-image-title">
          <div className="featured-bg">
            <h4 className="featured-text">Our Hostel Rooms</h4>
          </div>
        </div>
        {/* Rooms flex container */}
        <div className="hostel-rooms">
          {/* Rooms card start */}

          {/* {datalist.map((hostel) => (
            <div className="hostel-card" key={hostel._id}>
              <div className="hostel-card-image">
                <img src={hostel.hostel_image} alt="" />
              </div>
              <div className="description-content">
                <h4>Name : {hostel.hostel_name}</h4>
                <h4>Price : GHC {hostel.price}</h4>
                <h4>Number of rooms available : {hostel.number_of_rooms}</h4>
                <Link to={`/details/${hostel._id}`}>
                  <button>Make a booking</button>
                </Link>
              </div>
            </div>
          ))} */}

          {datalist.map((hostel) => (
            <div className="hostel-card" key={hostel._id}>
              <div className="hostel-card-image">
                <img src={hostel.hostel_image} alt="" />
              </div>

              <div className="description-content">
                <small>HOSTEL</small>
                <h5>Hostel Name : {hostel.hostel_name}</h5>
                <small>distance location</small>
                <hr />
                <Collapse accordion>
                  <Panel header="Description" key="1">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
                ,
                <hr />
                <p>Price : GHC {hostel.price}</p>
              </div>
              <div className="hostel-add-content">
                <p>
                  Perfect <b>location</b>
                </p>
                <p>
                  Superb <b>staff</b>
                </p>
                <p>
                  Fantastic <b>cleanliness</b>
                </p>
                <p>Number of rooms available : {hostel.number_of_rooms}</p>

                <br />
                <Link to={`/details/${hostel._id}`}>
                  <Button type="danger" size="large">
                    Click to make a reservation
                  </Button>
                </Link>
              </div>
            </div>
          ))}

          {/* Rooms card End*/}
        </div>
        {/* End of Rooms flex container */}
        <Footer />
      </div>
    </>
  );
};

export default Rooms;
