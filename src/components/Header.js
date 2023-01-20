import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const [isProfilePage, setIsProfilePage] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const pathName = url.pathname;
    console.log("Log Z url has changes", pathName);

    if (pathName.includes("user")) {
      setIsProfilePage(true);
    } else {
      setIsProfilePage(false);
    }
  }, [location]);

  const fetchData = async () => {
    props.fetchData(0);
  };
  return (
    <Container>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <h5 className="d-flex justify-content-between">Logo</h5>
        </Col>
        <Col>
          {isProfilePage ? (
            <Link to="/">
              <Button variant="primary" size="sm" style={{ color: "black" }}>
                Back
              </Button>
            </Link>
          ) : (
            <Button variant="primary" size="sm" active onClick={fetchData}>
              Get New Users
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
