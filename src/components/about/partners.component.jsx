import React from "react";
import { Image } from "react-bootstrap";
import { Col, Container, Row, Button } from "reactstrap";

const style = { width: "150px" };

function Partners() {
  return (
    <Container>
      <h3 className="display-3">Our clients and partners</h3>
      <div className="container-fluid">
        <div className="row flex-nowrap" style={{ overflow: "hidden" }}>
          <div className="col-3">
            <img
              alt="..."
              className=" img-fluid rounded-circle shadow"
              src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-2.jpg"
              style={style}
            ></img>
            <small className=" d-block text-uppercase font-weight-bold mb-4">
              Company
            </small>
          </div>

          <div className="col-3">
            <img
              alt="..."
              className=" img-fluid rounded-circle shadow"
              src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-2.jpg"
              style={style}
            ></img>
            <small className=" d-block text-uppercase font-weight-bold mb-4">
              Company
            </small>
          </div>

          <div className="col-3">
            <img
              alt="..."
              className=" img-fluid rounded-circle shadow"
              src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-2.jpg"
              style={style}
            ></img>
            <small className=" d-block text-uppercase font-weight-bold mb-4">
              Company
            </small>
          </div>

          <div className="col-3">
            <img
              alt="..."
              className=" img-fluid rounded-circle shadow"
              src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-2.jpg"
              style={style}
            ></img>
            <small className=" d-block text-uppercase font-weight-bold mb-4">
              Company
            </small>
          </div>

          <div className="col-3">
            <img
              alt="..."
              className=" img-fluid rounded-circle shadow"
              src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-2.jpg"
              style={style}
            ></img>
            <small className=" d-block text-uppercase font-weight-bold mb-4">
              Company
            </small>
          </div>

          <div className="col-3">
            <img
              alt="..."
              className=" img-fluid rounded-circle shadow"
              src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-2.jpg"
              style={style}
            ></img>
            <small className=" d-block text-uppercase font-weight-bold mb-4">
              Company
            </small>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Partners;
