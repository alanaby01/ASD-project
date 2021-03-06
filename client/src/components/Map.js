import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import React from 'react'

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Current location'}
                />

                {/* <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow> */}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDkzLSBBWmB40Qo9CG3vH2sF1yQHFN7i5Q'
})(MapContainer)
