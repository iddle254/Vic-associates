import React from "react";
import { Jumbotron, Container } from "reactstrap";
const HeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  flexDirection: "column",
};
function Banner() {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <div style={HeaderStyle}>
            <h1 className="display-3">About us</h1>
            <p className="lead">
              We are a legal consulting firm based in Westlands, Nairobi. We
              mainly service construction companies.
            </p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Banner;
