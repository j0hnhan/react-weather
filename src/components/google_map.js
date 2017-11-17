import React from 'react';

export default class GoogleMap extends React.Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom:12,
			center: new google.maps.LatLng(this.props.lat, this.props.lon)
		});
	}

	render() {
		return (
			<div ref="map" />
		);
	}
}