import React, { Component } from "react";
import "../App.css";

import Header from "./header";
import Footer from "./footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="main-container">
          {/* header sections */}
          <Header />
          {/* End of header section */}

          <div className="banner">
            <img src="/images/coming_home.svg" alt="..." />
          </div>
          <div className="featured-image-title">
            <div className="featured-bg">
              <h4 className="featured-text">Our Featured Images</h4>
            </div>
          </div>

          <div className="image-gallery">
            <div className="image-container">
              <div className="price">GHC 200</div>
              <div className="image">
                <img src="/images/img_1.jpg" alt="" />
              </div>

              <div className="btn">
                <button>More Details</button>
              </div>
            </div>

            <div className="image-container">
              <div className="price">GHC 200</div>
              <div className="image">
                <img src="/images/img_1.jpg" alt="" />
              </div>

              <div className="btn">
                <button>More Details</button>
              </div>
            </div>

            <div className="image-container">
              <div className="price">GHC 200</div>
              <div className="image">
                <img src="/images/img_1.jpg" alt="" />
              </div>

              <div className="btn">
                <button>More Details</button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
