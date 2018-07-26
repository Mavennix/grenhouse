import React, { Component } from "react";

const ifont = {
  font: "35px"
};

const ifontBtn = {
  font: "15px",
  verticalAlign: "-4px"
};

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="col">
        <span className="header-btns">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm m-1"
          >
            LOGOUT
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm p-0"
          >
            <i className="material-icons" style={ifontBtn}>
              autorenew
            </i>
          </button>
        </span>
        <div className="float-right">
          <i className="material-icons" style={ifont}>
            account_balance
          </i>
          <h3 className="float-right">Green House</h3>
        </div>
      </div>
    );
  }
}

export default Header;
