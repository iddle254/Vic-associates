import React from "react";
import {
  UncontrolledCarousel,
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const items = [
  {
    src:
      "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-5.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src:
      "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-4.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src:
      "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-3.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

function Reviews() {
  return (
    <>
      {/* <Container>
        <Card className=" bg-gradient-default">
          <CardBody>
            <CardTitle className=" text-white" tag="h3">
              Testimonial
            </CardTitle>
            <blockquote className=" blockquote text-white mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className=" blockquote-footer text-danger">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </CardBody>
        </Card>
      </Container> */}

      <Row>
        <Col md="3" className="mx-auto">
          <Container>
            <h3>Reviews</h3>
            <UncontrolledCarousel items={items} />
            <Card className=" p-3">
              <CardBody className=" blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className=" blockquote-footer">
                  <small className=" text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </CardBody>
            </Card>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Reviews;
