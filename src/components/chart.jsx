import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  state = {
    chartData: {
      labels: ["05", "10", "15", "20", "25", "30"],
      datasets: [
        {
          label: "Temperature",
          data: [95, 23, 56, 77, 21, 56]
        }
      ]
    }
  };

  tooltip = {
    dataToggle: "tooltip",
    dataPlacement: "top"
  };
  render() {
    return (
      <div className="">
        <div className="row ml-1 rounded bg-white">
          <div
            className="col p-3 mt-5 bg-light text-center"
            title="Temperature"
          >
            <i className="material-icons">whatshot</i>
          </div>
          <div
            className="col p-3 mt-5 bg-light text-center"
            datatoggle="tooltip"
            dataplacement="top"
            title="Pressure"
          >
            <i className="material-icons">bubble_chart</i>
          </div>
          <div
            className="col p-3 mt-5 bg-light text-center"
            datatoggle="tooltip"
            dataplacement="top"
            title="Light"
          >
            <i className="material-icons">wb_sunny</i>
          </div>
          <div
            className="col p-3 mt-5 bg-light text-center"
            datatoggle="tooltip"
            dataplacement="top"
            title="Humility"
          >
            <i className="material-icons">cloud</i>
          </div>
          <div className="p-3 mt-5 bg-light" />
          <Line data={this.state.chartData} options={{}} />
        </div>
      </div>
    );
  }
}

export default Chart;
