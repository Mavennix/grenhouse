import React, { Component } from "react";
import DetailsHeader from "./details_header";
import Chart from "./chart";

class Details extends Component {
  state = {};
  info = this.props.info;
  render() {
    return (
      <React.Fragment>
        <div className="rounded bg-white mb-2">
          <DetailsHeader info={this.info} />
        </div>
        <div className="rounded bg-white ">
          <Chart />
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
