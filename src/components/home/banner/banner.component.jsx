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
            <h1 className="display-3">To all our esteemed clents, </h1>
            <p className="lead">Stay home & stay safe</p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Banner;
