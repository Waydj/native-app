import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherConditions = {
  Thunderstorm: {
    icon: "weather-lightning",
    gradient: "#16222a, #3a6073",
		title: 'Гроза',
		sybTitle: '',
  },
  Drizzle: {
    icon: "weather-rainy",
    gradient: ["#2c3e50, #4ca1af"],
		title: 'Мелкий дождь',
		sybTitle: '',
  },
  Rain: {
    icon: "weather-pouring",
    gradient: ["#2c3e50, #4ca1af"],
		title: 'Дождь',
		sybTitle: '',
  },
  Snow: {
    icon: "weather-snowy-heavy",
    gradient: ["#6190e8, #a7bfe8"],
		title: 'Снег',
		sybTitle: '',
  },
  Mist: {
    icon: "weather-hail",
    gradient: ["#bdc3c7, #2c3e50"],
		title: 'Туман',
		sybTitle: '',
  },
  Smoke: {
    icon: "weather-fog",
    gradient: ["#bdc3c7, #2c3e50"],
		title: 'Дым',
		sybTitle: '',
  },
  Haze: {
    icon: "weather-hazy",
    gradient: ["#bdc3c7, #2c3e50"],
		title: 'Легкий туман',
		sybTitle: '',
  },
  Dust: {
    icon: "weather-fog",
    gradient: ["#bdc3c7, #2c3e50"],
		title: 'Пыль',
		sybTitle: '',
  },
  Fog: {
    icon: "weather-fog",
    gradient: ["#3e5151, #decba4"],
		title: 'густой туман',
		sybTitle: '',
  },
  Squall: {
    icon: "weather-windy",
    gradient: ["#1e130c, #9a8478"],
		title: 'Шквал',
		sybTitle: '',
  },
  Clear: {
    icon: "weather-sunny",
    gradient: ["#2bc0e4", "#eaecc6"],
		title: 'Ясно',
		sybTitle: '',
  },
  Clouds: {
    icon: "weather-cloudy",
    gradient: ["#1c92d2, #f2fcfe"],
		title: 'Облака',
		sybTitle: '',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherConditions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="default" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherConditions[condition].icon}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
				<Text style={styles.headertext}>{weatherConditions[condition].title}</Text>
				<Text style={styles.subHeadertext}></Text>
			</View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Squall",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
	textContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start',
	},
  temp: {
    fontSize: 48,
    color: "white",
  },
	headertext: {
		color: 'white',
		fontSize: 48,
	},
	subHeadertext: {
		color: 'white',
		fontSize: 28,
	},
});
