import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="footer">
          <center>
            Copyright &copy; {new Date().getFullYear()} || All right-reserved
          </center>
        </div>
      </>
    );
  }
}

export default Footer;
