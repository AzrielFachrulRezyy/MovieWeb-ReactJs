import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="titleTrending text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">DUNE</Card.Title>
                  <Card.Text className="text-left">
                    Some quick example text to build on the card title and make
                    up
                  </Card.Text>
                  <Card.Text className="text-left ">
                    Last Update 3 mins ago
                  </Card.Text>
                  <div className="IntroButton mt-4 text-left">
                    <Button
                      variant="light"
                      href="https://tv1.indositusxxi.id/movie/dune-2021-gi2dembq/"
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
                src={everythingImage}
                alt="Everything Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">EVERYTHING</Card.Title>
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
                      href="https://serialdrakor.online/nonton-everything-everywhere-all-at-once-2022-sub-indo/"
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
                src={infiniteImage}
                alt="Infinite Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">
                    INFINITE STORM
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
                      href="https://tv1.lk21official.wiki/infinite-2021/"
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
                src={morbiusImage}
                alt="Morbius Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">MORBIUS</Card.Title>
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
                      href="https://45.148.122.77/morbius-3/"
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
                src={lightyearImage}
                alt="Buzz LightYear"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">LIGHTYEAR</Card.Title>
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
                      href="http://45.148.122.80/lightyear-2022/"
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
              <Image src={jokerImage} alt="Joker Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center ">JOKER</Card.Title>
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
                      href="https://tv1.lk21official.wiki/joker-2019/"
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
export default Trending;
