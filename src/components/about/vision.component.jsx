import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
} from "reactstrap";
import trust from "../../assets/img/trust.jpg";
import vision from "../../assets/img/vision.jpg";
import column from "../../assets/img/column.jpg";

const style = { height: "150px" };

function Vision() {
  return (
    <Container>
      <CardDeck>
        <Card>
          <img
            alt="..."
            className=" img-fluid rounded shadow-lg"
            src={column}
            style={style}
          ></img>
          <CardBody>
            <CardTitle tag="h5">Mission</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText className="lead">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>

        <Card>
          <img
            alt="..."
            className=" img-fluid rounded shadow-lg"
            src={vision}
            style={style}
          ></img>
          <CardBody>
            <CardTitle tag="h5">Vision</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText className="lead">
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
        <Card>
          <img
            alt="..."
            className=" img-fluid rounded shadow-lg"
            src={trust}
            style={style}
          ></img>
          <CardBody>
            <CardTitle tag="h5">Our Credibility</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText className="lead">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default Vision;
