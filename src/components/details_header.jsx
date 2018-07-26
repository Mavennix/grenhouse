import React, { Component } from "react";

const ifont = {
  fontSize: "30px",
  verticalAlign: "-4px"
};
const ifontSm = {
  fontSize: "20px",
  verticalAlign: "-4px"
};
class DetailsHeader extends Component {
  state = {};
  info = this.props.info;

  render() {
    return (
      <React.Fragment>
        <div className="row ml-1 rounded bg-white">
          <div className="p-3 mt-5 bg-light col">
            <p className="h3">
              <i className="material-icons mr-2" style={ifont}>
                account_circle
              </i>
              Test
              <span className="bg-success float-right text-white display-3 p-3 m-0">
                17
              </span>
            </p>

            <span className="h6 pl-1">
              <i className="material-icons mr-1" style={ifontSm}>
                alarm
              </i>
              Aug 11, 2018 - Aug 21, 2018
            </span>
          </div>
        </div>

        <div className="row ml-1 rounded bg-white">
          <div className="col shadow-sm rounded-circle text-center p-3 m-3">
            <h1 className="display-3">{this.info[0].temperature}</h1>
            <i className="material-icons">timeline</i>
          </div>
          <div className="col shadow-sm rounded-circle text-center p-3 m-3">
            <h1 className="display-3">{this.info[0].pressure}</h1>
            <i className="material-icons">youtube_searched_for</i>
          </div>
          <div className="col shadow-sm rounded-circle text-center p-3 m-3">
            <h1 className="display-3">{this.info[0].light}</h1>
            <i className="material-icons">call_merge</i>
          </div>
          <div className="col shadow-sm rounded-circle text-center p-3 m-3">
            <h1 className="display-3">{this.info[0].humidity}</h1>
            <i className="material-icons">filter_list</i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailsHeader;
