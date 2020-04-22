import React from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Octicon, { MarkGithub } from "@primer/octicons-react";
class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: ""
    };
  }

  handleProfileNameChange = e => {
    console.log(e.target.value);
    this.setState({
      userName: e.target.value
    });
  };

  handleSubmit = () => {
    const history = useHistory();
    history.push(`/profile/${this.state.userName}`);
  };
  render() {
    return (
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        {/* <Card style={{ height: "140", width: "345" }}>
          <CardActionArea>
            <CardContent style={{ alignText: "center" }}>
              <Typography gutterBottom variant="h5" component="h2">
                <i
                  className="fab fa-github-square"
                  style={{ textAlign: "center", size: "" }}
                ></i>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Find Your Git Profile
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <input type="text" onChange={this.handleProfileNameChange} />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/profile/${this.state.userName}`}>Submit</Link>
          </CardActions>
        </Card> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Form>
            <Form.Group
              controlId="profilename"
              style={{
                marginTop: "30vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center"
              }}
            >
              <div>
                <i
                  class="fab fa-github"
                  style={{ fontSize: "5rem", color: "#007BFF" }}
                ></i>
              </div>
              <Form.Label
                style={{ color: "white", fontSize: "2.5rem", margin: "2rem" }}
              >
                Find Your GitProfile
              </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder=""
                onChange={this.handleProfileNameChange}
              />
            </Form.Group>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem"
              }}
            >
              <Button variant="primary" type="submit">
                <Link
                  to={`/profile/${this.state.userName}`}
                  style={{ color: "white" }}
                >
                  Submit
                </Link>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default UserProfile;
