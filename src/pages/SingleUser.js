import { useLocation } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
function SingleUser(props) {
  // eslint-disable-next-line no-undef

  const location = useLocation();

  return (
    <>
      <Card style={{textAlign:"center"}}>
        <Card.Body style={{ backgroundColor: "#ADD8E6", margin: "100px"  }}>
          <Container>
            <Image src={location.state.avatar} roundedCircle />
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <h5>{location.state.name}</h5>
              </Col>
            </Row>
            <Row style={{ marginTop: "60px", marginBottom: "70px" }}>
              <Col>{location.state.email}</Col>
              <Col>{location.state.address}</Col>
              <Col>{location.state.phone}</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleUser;
