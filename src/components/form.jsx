import React, { Component } from "react";

class Form extends Component {
  state = {
    info: this.props.info
  };
  handleSimulation = e => {
    const handledate = () => {
      let date = new Date().toLocaleString();
      return date;
    };

    this.props.onSubmit(
      handledate(),
      Number(this.refs.temperature.value),
      Number(this.refs.pressure.value),
      Number(this.refs.light.value),
      Number(this.refs.humidity.value)
    );
    e.preventDefault();
    this.refs.temperature.value = "";
    this.refs.pressure.value = "";
    this.refs.light.value = "";
    this.refs.humidity.value = "";
  };
  render() {
    return (
      <div>
        <h4 className="h4 text-dark text-center pt-4">SIMULATE THE RECORDS</h4>
        <form action="" onSubmit={this.handleSimulation}>
          <input type="text" ref="temperature" placeholder="temperature" />
          <input type="text" ref="pressure" placeholder="pressure" />
          <input type="text" ref="light" placeholder="light" />
          <input type="text" ref="humidity" placeholder="humidity" />
          <br />
          <input
            type="submit"
            value=">"
            className="btn btn-success text-white"
          />
        </form>
      </div>
    );
  }
}

export default Form;
