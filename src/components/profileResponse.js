import React from "react";
import axios from "axios";
import Profiledetails from "./Profiledetails";
import Piechart from "./../containers/piechart";
import TopRepos from "./../containers/topRepos";
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {}
    };
  }
  componentDidMount = () => {
    const vm = this;
    axios
      .get(`https://api.github.com/users/${this.props.match.params.username}`)
      .then(function(response) {
        const userdata = response.data;
        vm.setState({
          userProfile: userdata
        });
        console.log(userdata);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <Profiledetails profileInfo={this.state.userProfile} />
        <Piechart name={this.props.match.params.username} />
      </div>
    );
  }
}
