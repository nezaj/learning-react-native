import React, {
  StyleSheet,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

const Forecast = ({main, description, temp}) => (
  <View style={styles.container}>
    <Text style={styles.bigText}>
      {main}
    </Text>
    <Text style={styles.mainText}>
      Current conditions: {description}
    </Text>
    <Text style={styles.bigText}>
      {temp}°F
    </Text>
  </View>
)

export default Forecast
