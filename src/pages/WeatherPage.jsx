import React, { Component } from 'react'
import DaysReport from '../components/DaysReport'
import NowWeather from '../components/NowWeather';
import axios from 'axios'
import HoursReport from '../components/HoursReport';
export default class WeatherPage extends Component {
    state = {
        now_data: { now: {} },
        now_air:{now:{}},
        days_report: {daily:[{fxDate:''},{fxDate:''}]},
        hours_report: {hourly:[]},
    }
    render() {
        return (
            <div>
                <NowWeather now_data={this.state.now_data} now_air={this.state.now_air} days_report={this.state.days_report}></NowWeather>
                <DaysReport days_report={this.state.days_report}></DaysReport>
                <HoursReport hours_report={this.state.hours_report}></HoursReport>
                <br/><br/><br/><br/>
            </div>
        )
    }
    getNowWeather(location='126.64,45.74') {
        var url='api/v7/weather/now?location='+location
        axios.get(url)
            .then((res) => {
                //console.log(res)
                this.setState({now_data: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    getNowAir(location='126.64,45.74'){
        var url='api/v7/air/now?location='+location
        axios.get(url)
            .then((res) => {
                console.log(res)
                this.setState({now_air: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    getDaysReport(location='126.64,45.74'){
        var url='api/v7/weather/30d?location='+location
        axios.get(url)
            .then((res) => {
                console.log(res)
                this.setState({days_report: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    getHoursReport(location='126.64,45.74'){
        var url='api/v7/weather/168h?location='+location
        axios.get(url)
            .then((res) => {
                console.log(res)
                this.setState({hours_report: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    componentDidMount() {
        this.getNowWeather();
        this.getDaysReport();
        this.getHoursReport();
        this.getNowAir();
    }
}
