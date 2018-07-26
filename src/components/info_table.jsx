import React, { Component } from "react";

const ifont = {
  fontSize: "90px"
};

class InfoTable extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col pt-5 text-center">
          <i className="material-icons" style={ifont}>
            bar_chart
          </i>

          <h3 className="mt-3">CHARTS</h3>
        </div>

        <table className="table text-white">
          <thead className="thead">
            <tr>
              <th scope="col" />
              <th scope="col">
                <i className="material-icons">timeline</i>
              </th>
              <th scope="col">
                <i className="material-icons">youtube_searched_for</i>
              </th>
              <th scope="col">
                <i className="material-icons">call_merge</i>
              </th>
              <th scope="col">
                <i className="material-icons">filter_list</i>
              </th>
            </tr>
          </thead>
          <tbody>{this.createTableContent()}</tbody>
        </table>
      </React.Fragment>
    );
  }

  createTableContent = () => {
    let rowData = [];
    for (let i = 0; i < this.props.info.length; i++) {
      rowData.push(
        <tr>
          {Object.values(this.props.info[i]).map(info => <td>{info}</td>)}
        </tr>
      );
    }
    return rowData;
  };
}
export default InfoTable;
