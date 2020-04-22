import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardColumns,
  CardDeck
} from "react-bootstrap";
import Octicon, {
  Repo,
  RepoForked,
  Star,
  PrimitiveDot
} from "@primer/octicons-react";
export default class TopRepos extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ marginLeft: "52rem", marginBottom: "5rem" }}>Top Repos</h1>
        <Container fluid="md">
          <Row>
            {this.props.repodata.map(repo => {
              return (
                <Col>
                  <CardDeck style={{ marginBottom: "2rem" }}>
                    <Card
                      style={{ width: "18rem" }}
                      bg="light"
                      text="black"
                      border="dark"
                    >
                      <Card.Body>
                        <Card.Title>
                          <Octicon icon={Repo} />
                          <span style={{ marginLeft: "5px" }}>{repo.name}</span>
                        </Card.Title>
                        <Card.Text>{repo.name}</Card.Text>
                        <Octicon icon={PrimitiveDot} />
                        <span
                          style={{ marginLeft: "5px", marginRight: "10px" }}
                        >
                          {repo.language}
                        </span>
                        <Octicon icon={Star} />
                        <span
                          style={{ marginLeft: "5px", marginRight: "10px" }}
                        >
                          {repo.stargazers_count}
                        </span>
                        <Octicon icon={RepoForked} />
                        <span
                          style={{ marginLeft: "5px", marginRight: "10px" }}
                        >
                          {repo.forks_count}
                        </span>
                        <span style={{ marginLeft: "5px" }}>
                          {repo.size} KB
                        </span>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </Col>
              );
            })}

            {/* <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}
