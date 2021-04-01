import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import './Streak.css';

export default class History extends Component {
  render() {
   

    let daysRecorded = ["2021-03-26","2021-03-27","2021-03-28","2021-03-30","2021-04-1"];
    let dayGrids = [];
    for (let i = 0; i < 365; i++) {
      let dayGridDate = moment()
        .subtract(i, "days")
        .format("YYYY-MM-D");
      if (dayGridDate.toString() === daysRecorded[daysRecorded.length - 1]) {
        dayGrids.unshift(<div className="day day--active" key={i} />);
        daysRecorded.splice(daysRecorded.length - 1, 1);
      } else {
        dayGrids.unshift(<div className="day" key={i} />);
      }
    }

    return (
      <div className="history">
        <div className="history__header">
          <div>
            <div className="habit__name habit__name--large">Yoga</div>
            <div className="history__duration">Last 365 Days</div>
          </div>
          
        </div>
        <div className="days">{dayGrids}</div>
      </div>
    );
  }
}
