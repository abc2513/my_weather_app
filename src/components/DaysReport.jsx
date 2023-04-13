import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import days_chart from '../chart/days_chart';
var ctx;
var dataChart;
export default class DaysReport extends Component {

    render() {
        var daily = this.props.days_report.daily;
        return (
            <div className='days-report'>
                <h3 className='u-center-text'>30天预报</h3>
                <div className='scoll'>
                    <div className="scoll-content">
                        <div className="day-content">
                            <div className="row">
                                {
                                    daily.map((item) => (<div className="col-1-of-30">
                                        {item.tempMax}°
                                        <i className={'qi-' + item.iconDay}></i>
                                    </div>))
                                }
                            </div>
                        </div>
                        <div className="chart-content">
                            <canvas id="days_chart"></canvas>
                        </div>
                        <div className="night-content">
                            <div className="row">
                                {
                                    daily.map((item) => (<div className="col-1-of-30">
                                        {item.tempMin}°
                                        <i className={'qi-' + item.iconNight}></i>
                                    </div>))
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
    UNSAFE_componentWillReceiveProps(props) {
        var daily = props.days_report.daily;
        console.log(daily);
        if (daily && daily != []) {
            dataChart.data.datasets[0].data = [];
            dataChart.data.datasets[1].data = [];//item.fxDate
            dataChart.data.label = []
            dataChart.data.datasets[0].data = daily.map((item) => { return item.tempMax })
            dataChart.data.datasets[1].data = daily.map((item) => { return item.tempMin })
            dataChart.data.labels = daily.map((item) => item.fxDate.slice(5))
            dataChart.update();
        }
        console.log(dataChart)
    }
    componentDidMount() {
        ctx = document.getElementById('days_chart').getContext('2d')
        dataChart = new Chart(ctx, days_chart)
    }
}
