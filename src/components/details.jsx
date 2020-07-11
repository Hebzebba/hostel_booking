import React, { useEffect } from "react";

import Header from "./header";
import Footer from "./footer";
import DisplayMap from "./map";
import { fetchDataDetail } from "../store/actions/actions";

import { useDispatch, useSelector } from "react-redux";

const Details = (props) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detailsData);

  useEffect(() => {
    dispatch(fetchDataDetail(props.match.params.id));
  }, []);

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="details-container">
          <div className="hostel-name-txt">
            <h1>{details.name}</h1>
          </div>
          <div className="hostel-image-form">
            <div className="hostel-image">
              <img src={details.image} alt="" />
            </div>
            <div className="hostel-form">
              <div className="form-description-container">
                <form autoComplete="off">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="First name"
                      style={styles.text}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Last name"
                      style={styles.text}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      style={styles.text}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input type="button" value="Book" style={styles.text} />
                  </div>
                </form>
              </div>
              <div className="map-container">
                <iframe src={details.map_area} style={styles.iframe}></iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const styles = {
  text: {
    width: "100%",
    height: "40px",
    padding: "10px",
  },
  iframe: {
    border: 0,
    width: "100%",
    height: "200px",
  },
};

export default Details;
