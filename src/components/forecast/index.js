// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $ from 'jquery';

import NavBar from '../navbar';

export default class Forecast extends Component {

	constructor(props) {
		super(props);

		// const [data, setData] = useState({})
		// const [location, setLocation] = useState(``)

	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// var url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location},uk&APPID=5dd07d3033c59fcd9afe226989a8fdbc`;
		// $.ajax({
		// 	url: url,
		// 	dataType: "jsonp",
		// 	success: this.parseResponse,
		// 	error: function (req, err) { console.log('API call failed ' + err); }
		// })
		// // once the data grabbed, hide the button
		// this.setState({ display: false });
	}

	render() {
		return (
			<div className="app">
				<NavBar name='Forecast'/>
				<h1>The Next Week:</h1>
				<a href='../' class="button">&#8592; Home</a>

				
			</div>
		)
	}

}
