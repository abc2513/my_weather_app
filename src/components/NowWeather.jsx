import React, { Component } from 'react'
import DaySmallCard from './DaySmallCard';
export default class NowWeather extends Component {

  render() {
    var now = this.props.now_data.now;
    var now_air = this.props.now_air.now;
    return (
      <div className='now-weather'>
        <div className="shadow">

          <div className="right-info-list">
            <div>相对湿度：{now.humidity}%</div>
            <div>露点温度：{now.dew}°</div>
            <div>降水量：{now.precip}mm</div>
            <div>能见度：{now.vis}km</div>
            <div>气压：{now.pressure}hPa</div>
            <div>云量：{now.vis}%</div>
          </div>

          <div className="left-info-list">
            <div className="obstime">观测时间：{now.obsTime}</div>
            <div>{now.windDir} {now.windScale}级</div>
            <div className="feelsLike">体感温度：{now.feelsLike}°</div>
            <div>空气质量：{now_air.aqi}{now_air.category}</div>
          </div>

          <div className="temp">{now.temp}°</div>
          <div className="text">
            <i className={'qi-' + now.icon}></i>
            {now.text}
          </div>

          <div className='cards-box'>
            <DaySmallCard day_report={this.props.days_report.daily[0]}></DaySmallCard>
            <DaySmallCard day_report={this.props.days_report.daily[1]}></DaySmallCard>
          </div>
        </div>
      </div>
    )
  }
}
