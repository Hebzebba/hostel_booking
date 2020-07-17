import React, { useEffect, useState } from "react";
import { Steps, Button, message } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import UserForm from "./userForm";

import Header from "./header";
import Footer from "./footer";

import { fetchDataDetail } from "../store/actions/actions";

import { useDispatch, useSelector } from "react-redux";

const Details = (props) => {
  const [current, setCurrent] = useState(0);

  const dispatch = useDispatch();
  const details = useSelector((state) => state.detailsData);

  useEffect(() => {
    dispatch(fetchDataDetail(props.match.params.id));
  }, []);
  const { Step } = Steps;

  const steps = [
    {
      title: "User Details",
      content: <UserForm />,
      icon: <UserOutlined />,
    },
    {
      title: "Payment Method",
      content: "Second-content",
      icon: <SolutionOutlined />,
    },
    {
      title: "Proceed to checkout",
      content: "Last-content",
      icon: <LoadingOutlined />,
    },
  ];

  const next = () => {
    const curr = current + 1;
    setCurrent(curr);
  };

  const prev = () => {
    const curr = current - 1;
    setCurrent(curr);
  };

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="details-container">
          <div className="hostel-name-txt">
            <h1>{details.hostel_name}</h1>
          </div>
          <div className="hostel-image-form">
            <div className="hostel-image">
              <img src={details.hostel_image} alt="" />
            </div>
            <div className="hostel-form">
              <div className="form-description-container">
                <Steps current={current}>
                  {steps.map((item) => (
                    <Step
                      key={item.title}
                      title={item.title}
                      icon={item.icon}
                    />
                  ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                  {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => message.success("Processing complete!")}
                    >
                      Done
                    </Button>
                  )}
                  {current > 0 && (
                    <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                      Previous
                    </Button>
                  )}
                </div>
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
