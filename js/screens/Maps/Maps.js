import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from "./styles";

const Maps = ({ latitude, longitude }) => (
  <MapView
    style={styles.map}
    region={{
      latitude,
      longitude,
      latitudeDelta: 0.075,
      longitudeDelta: 0.075
    }}
  >
    <Marker
      coordinate={{ latitude, longitude }}
      image={require('../../assets/images/map_pin.png')}
    />
  </MapView>
);

export default Maps;
