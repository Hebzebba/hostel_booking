import React, { useEffect, useState } from "react";
import { Steps, Button, message } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardHeader,
} from "mdbreact";
import Payment from "./payments";

import Header from "./header";
import UserForm from "./userForm";
import Footer from "./footer";

import { fetchDataDetail } from "../store/actions/actions";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";

const { Step } = Steps;

const steps = [
  {
    title: "Profile",
    content: <UserForm />,
    icon: <UserOutlined />,
  },
  {
    title: "Payment Process",
    content: <Payment />,
    icon: <SolutionOutlined />,
  },
  {
    title: "Last",
    content: "Last-content",
    icon: <LoadingOutlined />,
  },
];

const Details = (props) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detailsData);
  const [current, setCurrent] = useState(0);

  const next = () => {
    const cur = current + 1;
    setCurrent(cur);
  };

  const prev = () => {
    const cur = current - 1;
    setCurrent(cur);
  };

  useEffect(() => {
    dispatch(fetchDataDetail(props.match.params.id));
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
                  src={details.hostel_image}
                />
                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle>{details.hostel_name}</MDBCardTitle>
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
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <MDBCard>
                <MDBCardTitle className="m-auto">
                  Make a reservation
                </MDBCardTitle>
                <MDBCardBody style={{ height: "30%" }}>
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
                      <Button
                        style={{ margin: "0 8px" }}
                        onClick={() => prev()}
                      >
                        Previous
                      </Button>
                    )}
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-md-6 col-sm-12">
              <MDBCard className="mb-2 mt-2">
                <MDBCardHeader>
                  <MDBCardTitle className="m-auto">Description</MDBCardTitle>
                </MDBCardHeader>
                <MDBCardBody></MDBCardBody>
              </MDBCard>
              <MDBCard>
                <MDBCardHeader>
                  <MDBCardTitle className="m-auto">Map Location</MDBCardTitle>
                </MDBCardHeader>
                <MDBCardBody>
                  <iframe
                    src={details.map_area}
                    title="This is a unique title"
                    width="100%"
                    height="300px"
                    frameBorder="0"
                    style={{ border: 0 }}
                  />
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Details;
