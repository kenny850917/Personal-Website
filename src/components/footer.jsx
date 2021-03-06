import React from "react";
import { Card } from "react-bootstrap";

const Footer = ({ type }) => {
  console.log({ type: true } == true, "test");
  if (type == "fixed") {
    return (
      <Card className="text-center bg-dark text-white fixed-bottom">
        <Card.Body>
          <Card.Title className="cardTitle">
            Designed with Lots of ☕ and 💗 By Kenny
          </Card.Title>
          <Card.Text className="cardText">
            Powered by react-spring | styled-components | bootstrap
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"> © 2020 April</Card.Footer>
      </Card>
    );
  } else
    return (
      <Card className="text-center bg-dark text-white">
        <Card.Body>
          <Card.Title className="cardTitle">
            Designed with Lots of ☕ and 💗 By Kenny
          </Card.Title>
          <Card.Text className="cardText">
            Powered by react-spring | styled-components | bootstrap
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"> © 2020 April</Card.Footer>
      </Card>
    );
};

export default Footer;
