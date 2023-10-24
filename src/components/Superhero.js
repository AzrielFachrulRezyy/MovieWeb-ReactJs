import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="titleSuperhero text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Antman Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">ANT-MAN</Card.Title>
                  <Card.Text className="text-left">
                    Some quick example text to build on the card title and make
                    up
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last Update 3 mins ago
                  </Card.Text>
                  <div className="IntroButton mt-4 text-left">
                    <Button
                      variant="light"
                      href="https://tv3.sinemaxxi.biz/nonton-ant-man-and-the-wasp-quantumania-2023/"
                      target="_blank"
                    >
                      Watch Movie
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={avengerImage}
                alt="Avenger Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">
                    AVENGER END GAME
                  </Card.Title>
                  <Card.Text className="text-left">
                    Some quick example text to build on the card title and make
                    up
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last Update 3 mins ago
                  </Card.Text>
                  <div className="IntroButton mt-4 text-left">
                    <Button
                      variant="light"
                      href="https://lk21.pictures/avengers-endgame-2019/"
                      target="_blank"
                    >
                      Watch Movie
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanImage} alt="Batman Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">
                    THE DARK KNIGHT (BATMAN)
                  </Card.Title>
                  <Card.Text className="text-left">
                    Some quick example text to build on the card title and make
                    up
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last Update 3 mins ago
                  </Card.Text>
                  <div className="IntroButton mt-4 text-left">
                    <Button
                      variant="light"
                      href="http://161.97.132.252/the-dark-knight-2008/"
                      target="_blank"
                    >
                      Watch Movie
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={robinhoodImage}
                alt="Robin Hood Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">ROBIN HOOD</Card.Title>
                  <Card.Text className="text-left">
                    Some quick example text to build on the card title and make
                    up
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last Update 3 mins ago
                  </Card.Text>
                  <div className="IntroButton mt-4 text-left">
                    <Button
                      variant="light"
                      href="http://51.79.226.152/movie/robin-hood-2018/"
                      target="_blank"
                    >
                      Watch Movie
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImage}
                alt="Spiderman Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">
                    SPIDERMAN NO WAY HOME
                  </Card.Title>
                  <Card.Text className="text-left">
                    Some quick example text to build on the card title and make
                    up
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last Update 3 mins ago
                  </Card.Text>
                  <div className="IntroButton mt-4 text-left">
                    <Button
                      variant="light"
                      href="http://128.199.130.38/spider-man-no-way-home/"
                      target="_blank"
                    >
                      Watch Movie
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={supermanImage}
                alt="Superman Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">
                    MAN OF STEEL (SUPERMAN)
                  </Card.Title>
                  <Card.Text className="text-left">
                    Some quick example text to build on the card title and make
                    up
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last Update 3 mins ago
                  </Card.Text>
                  <div className="IntroButton mt-4 text-left">
                    <Button
                      variant="light"
                      href="https://101.99.91.147/man-of-steel-2013/"
                      target="_blank"
                    >
                      Watch Movie
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Superhero;
