import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

function Insights() {
  return (
    <Container>
      <h3 className="display-3">Latest News</h3>
      <div className=" card-deck">
        <Card>
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            top
          ></CardImg>
          <CardBody>
            <CardTitle className="display-4">
              Why Ruai residents can't stop smiling
            </CardTitle>
            <CardText className="lead">
              Plans are underway to set up an ultra-modern sports centre in
              Nairobi after the County Deputy Governor Ann Kananu and the
              President of National Olympic Committee of Kenya (NOCK) Paul
              Tergat signed a Memorandum of Understanding (MOU) to facilitate
              its construction. The facility dubbed the OlympAfrica Centre which
              will be set up in Ruai, Kasarani Constituency will cost Ksh38.3
              Million and will be the first of its kind in the country.
            </CardText>
            <CardText>
              <small className=" text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            top
          ></CardImg>
          <CardBody>
            <CardTitle className="display-4">
              Big winners in the KES 65 billion express way project
            </CardTitle>
            <CardText className="lead">
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <CardText>
              <small className=" text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            top
          ></CardImg>
          <CardBody>
            <CardTitle className="display-4">
              The changing face of Nairobi
            </CardTitle>
            <CardText className="lead">
              Props to NMS for success after success story in revamping the
              city's infrastructure
            </CardText>
            <CardText>
              <small className=" text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}

export default Insights;
