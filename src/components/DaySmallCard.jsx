import React, { Component } from 'react'

export default class DaySmallCard extends Component {
  render() {
    var day_report=this.props.day_report;
    return (
      <div className='day-small-card'>
        <div className="day-small-card-icon"><i className={'qi-'+day_report.iconDay}></i><div className="day-small-card-text">{day_report.textDay}</div></div>
        <div className="day-small-card-day">{day_report.fxDate}</div>
        <div className="day-small-card-temp">{day_report.tempMax+' / '+day_report.tempMin+'°C'}</div>
        <div className="day-small-card-air">{}</div>
      </div>
    )
  }
}
