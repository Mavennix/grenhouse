import React, { Component } from "react";
import Header from "./header";
import Details from "./details";
import InfoTable from "./info_table";
import Form from "./form";

class Greenhouse extends Component {
  state = {
    info: [
      {
        weatherDate: "",
        temperature: "",
        pressure: "",
        light: "",
        humidity: ""
      }
    ]
  };
  onSubmit = (weatherDate, temperature, pressure, light, humidity) => {
    let newInfo = this.state.info;
    newInfo.unshift({
      weatherDate,
      temperature,
      pressure,
      light,
      humidity
    });

    this.setState({ newInfo });
    return newInfo;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 p-0">
            <div className="bg-success text-white p-0">
              <InfoTable info={this.state.info} />
            </div>
            <div className="bg-white m-0 text-white p-0">
              <Form onSubmit={this.onSubmit} />
            </div>
          </div>

          <div className="col-8">
            <div className="row shadow-sm p-3 mb-2 bg-white">
              <Header />
            </div>
            <Details info={this.state.info} />
          </div>
        </div>
      </div>
    );
  }
}

export default Greenhouse;
