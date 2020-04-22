import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import axios from "axios";
import TopRepos from "./topRepos";
export default class Piechart extends React.Component {
  constructor() {
    super();
    this.state = {
      chartdata: [],
      languagedata: []
    };
  }

  componentDidMount = () => {
    const vm = this;
    axios
      .get(`https://api.github.com/users/${this.props.name}/repos?per_page=100`)
      .then(function(response) {
        //const languagedata = response.data;
        const languages = [];
        const langcount = {};
        response.data.forEach(element => {
          languages.push(element.language);
        });
        console.log(languages);
        languages.forEach(element => {
          if (langcount.hasOwnProperty(element)) {
            langcount[element] = langcount[element] + 1;
          } else {
            langcount[element] = 1;
          }
        });
        console.log(langcount);

        var mydata = [];
        for (let [key, value] of Object.entries(langcount)) {
          console.log(`${key}: ${value}`);
          var myobj = {
            name: key,
            value: value
          };
          mydata.push(myobj);
        }
        console.log(mydata);
        vm.setState({
          chartdata: mydata,
          languagedata: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h1 style={{ marginLeft: "52rem", marginTop: "5rem" }}>
          Top Languages
        </h1>
        <PieChart width={400} height={400} style={{ marginLeft: "50rem" }}>
          <Pie
            isAnimationActive={false}
            data={this.state.chartdata}
            cx={200}
            cy={200}
            outerRadius={100}
            fill="#8884d8"
            label
          />
          {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
          <Tooltip />
        </PieChart>
        <TopRepos repodata={this.state.languagedata} />
      </div>
    );
  }
}
