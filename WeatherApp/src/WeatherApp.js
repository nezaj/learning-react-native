import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import Forecast from './Forecast'

export default class WeatherApp extends Component {
  state = {
    zip: '',
    forecast: null
  }

  /* ----------------- Life-Cycle Methods ----------------- */
  render () {
    var content = null
    if (this.state.forecast !== null) {
      content = <Forecast
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}/>
    }
    return (
      <View style={styles.container}>
        <Image source={require('image!flowers')}
               resizeMode='cover'
               style={styles.backdrop}>
          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={styles.mainText}>
               Current weather for
             </Text>
             <View style={styles.zipContainer}>
               <TextInput
                 style={[styles.zipCode, styles.mainText]}
                 onSubmitEditing={this.handleTextChange}/>
             </View>
           </View>
           {content}
         </View>
        </Image>
      </View>
    )
  }

  /* ------------------- Utilty Methods ------------------- */
  buildWeatherUrl = (zip, key = null) => {
    key = key || 'ea574594b9d36ab688642d5fbeab847e'
    const base = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `q=${zip}`
    const units = `units=imperial`
    const apiKey = `APPID=${key}`
    const queryParams = [query, units, apiKey].join('&')
    return [base, queryParams].join('?')
  }

  /* ------------------- Event Handlers ------------------- */
  handleTextChange = (e) => {
    const zip = e.nativeEvent.text
    console.log(zip)
    this.setState({ zip })

    const url = this.buildWeatherUrl(zip)
    fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON)
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        })
      })
      .catch((error) => {
        console.warn(error)
      })
  }
}

const baseFontSize = 16

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: baseFontSize
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
})
