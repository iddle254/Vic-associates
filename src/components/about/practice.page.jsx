import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardColumns,
  Container,
  Row,
  Col,
  CardDeck,
  CardImg,
  Button,
} from "reactstrap";

function Practice() {
  return (
    <Container>
      <h3 className="display-3">Practice Areas</h3>
      <Row>
        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">Alternative Dispute Resolution</CardTitle>
            <CardText className="lead">
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            {/* <Button>Go somewhere</Button> */}
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">Litigation</CardTitle>
            <CardText className="lead">
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            {/* <Button>Go somewhere</Button> */}
          </Card>
        </Col>

        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">Commercial law</CardTitle>
            <CardText className="lead">
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            {/* <Button>Go somewhere</Button> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Practice;
