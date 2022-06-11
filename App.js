import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import * as Location from "expo-location";

const API_KEY = "86de4d2f9fdb58b912b3f2fc544f915e";

import axios from "axios";
import Weather from "./components/weather";
import Loading from "./components/loading";

export default class App extends Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Не могу определить местоположение", "Грусть...");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.floor(temp)} condition={condition} />
    );
  }
}
