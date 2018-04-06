import React, {Component} from 'react';
import api from '../utils/api'; 
import queryString from 'query-string';
import Back from './Back';
import utils from '../utils/Helper';
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

function DayItem (props) {
  	var date = getDate(props.day.dt);
  	var icon = props.day.weather[0].icon;
  	return (
	    <div className='dayContainer'>
	      	<img className='weather' src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
	      	<h2 className='subheader'>{date}</h2>
	    </div>
  	)
}

class Forecast extends Component {
	constructor(props) {
     	super(props);
     	this.state = {
       		forecastData: [],
       		loading: true
     	}
 
     	this.makeRequest = this.makeRequest.bind(this);
   	}
   	
   	componentDidMount() {
     	this.city = queryString.parse(this.props.location.search).city;
     	this.makeRequest(city);
   	}

   	componentWillReceiveProps(nextProps) {
     	this.city = queryString.parse(nextProps.location.search).city;
     	this.makeRequest(city);
   	}

   	makeRequest(city) {
	    this.setState(function () {
	       return {
	         loading: true
	       }
	    })
	    api.getForecast(city)
	       .then(function (res) {
	        console.log(res)
	     	this.setState(function () {
	       		return {
	         		loading: false,
	         		forecastData: res,
	       		}
	     	})
	    }.bind(this))
    }
  	render() {
	    return (
	      	<div className="forecast">
				<Back />
	      	  ? <h1 className='forecast-header'> Loading </h1>
		      : <div>
		          	<h1 className='forecast-header'>{this.city}</h1>
		          	<div className='forecast-container'>
			            {this.state.forecastData.map(function (listItem) {
			              	return <DayItem key={listItem.dt} day={listItem} />
			            })}
			         </div>
		        </div>
	      	</div>
	    )
  	}
}

export default Forecast;