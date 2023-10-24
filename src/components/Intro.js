import { Button, Col, Container, Row } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON PILEM</div>
            <div className="title">GRATIS</div>
            <div className="IntroButton mt-4 text-center">
              <Button variant="light" href="#trending">
                Lihat Semua List
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
