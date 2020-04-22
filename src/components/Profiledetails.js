import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import Card from "react-bootstrap/Card";
export default class Userdetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid style={{ backgroundColor: "#1A1E22" }}>
        <Row className="justify-content-center">
          <Col xs={6} md={4} className="text-center">
            <Image
              src={this.props.profileInfo.avatar_url}
              roundedCircle
              style={{ width: "50%" }}
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={6} md={4} className="text-center">
            <label style={{ color: "white", fontSize: "40px" }}>
              {this.props.profileInfo.name}
            </label>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6} md={4} className="text-center">
            <label style={{ color: "#026BE7", fontSize: "30px" }}>
              @{this.props.profileInfo.login}
            </label>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={1} md={2}>
            <i
              className="fas fa-map-marker-alt mr-2"
              style={{ color: "white" }}
            ></i>
            <label style={{ color: "white", fontSize: "20px" }}>
              {this.props.profileInfo.location}
            </label>
          </Col>
          <Col xs={1} md={2}>
            <i
              className="far fa-calendar-alt mr-2"
              style={{ color: "white" }}
            ></i>
            <label style={{ color: "white", fontSize: "20px" }}>
              {moment(this.props.profileInfo.created_at).format("MMMM Do YYYY")}
            </label>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={1} md={2}>
            <Card bg="dark" text="white">
              <Card.Body>
                {this.props.profileInfo.public_repos} REPOSITORIES
              </Card.Body>
            </Card>
          </Col>
          <Col xs={1} md={2}>
            <Card bg="dark" text="white">
              <Card.Body>
                {this.props.profileInfo.followers} FOLLOWERS
              </Card.Body>
            </Card>
          </Col>
          <Col xs={1} md={2}>
            <Card bg="dark" text="white">
              <Card.Body>
                {this.props.profileInfo.following} FOLLOWING
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
