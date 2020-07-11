import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

          {datalist.map((hostel) => (
            <div className="hostel-card" key={hostel._id}>
              <div className="hostel-card-image">
                <img src={hostel.image} alt="" />
              </div>
              <div className="description-content">
                <br />
                <h4>Name : {hostel.name}</h4>
                <br />
                <h4>Price : GHC {hostel.price}</h4>
                <br />
                <h4>Number of rooms available : {hostel.number_of_rooms}</h4>
                <br />
                <Link to={`/details/${hostel._id}`}>
                  <button>Make a booking</button>
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
