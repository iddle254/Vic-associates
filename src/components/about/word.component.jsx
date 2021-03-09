import React from "react";
import {
  CardColumns,
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
  Container,
  Row,
  Col,
  Jumbotron,
} from "reactstrap";
import vic from "../../assets/img/CoverImage.JPG";

const style = { width: "300px", margin: "10   px" };
const messageCard = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
};

function Word() {
  return (
    <Container>
      <Jumbotron fluid>
        {/* <CardColumns> */}
        {/* <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
              width: "100%",
            }}
          > */}

        <CardTitle
          tag="h2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <h2 className="display-3">Message from our partners</h2>
        </CardTitle>
        <hr />
        <div style={messageCard}>
          <Row>
            <Col>
              <img
                alt="..."
                className=" img-fluid rounded shadow-lg"
                src={vic}
                style={style}
              ></img>
            </Col>
            <Col>
              <Row>
                <Col>
                  <CardText>
                    <p className="lead">
                      Despite disruptions in the past year brought about by ...
                    </p>
                  </CardText>
                  {/* <Button
                    style={{
                      marginTop: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    Button
                  </Button> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* </div> */}
        {/* </Card> */}
        {/* </CardColumns> */}
      </Jumbotron>
    </Container>
  );
}

export default Word;
