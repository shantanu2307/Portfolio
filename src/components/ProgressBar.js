import React from "react";
import "./progress.css";
class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }
  getProgress() {
    return this.props.progress;
  }

  render() {
    const progress = this.getProgress();
    return (
      <div>
        <div className="heading3">{this.props.title}</div>
        <div className="progressbar-container">
          <div
            className="progressbar-complete"
            style={{ width: `${progress}%` }}
          >
            <div className="progressbar-liquid"></div>
          </div>
          <b className="progress" style={{ fontSize: "70%" }}>
            {progress}%
          </b>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
