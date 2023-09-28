import React from "react";
import "./apiget.css"


class PixCt extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="pix-ct-comp">
        {this.props.text}
      </div>
    );
  }
}

export default PixCt;
