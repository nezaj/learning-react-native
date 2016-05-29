// XXX: This currently failing due to some issue with
// mocha/babel not being able to recognize the spread operator
// I tried searching for answers to this but found nothing
// Fix this later
import assert from 'assert'

import WeatherApp from '../../src/WeatherApp.js'

describe('WeatherApp', () => {
  let weatherApp

  beforeEach(() => {
    weatherApp = new WeahterApp()
  })

  context('#buildWeatherUrl', () => {
    it('builds the expected url', () => {
      const zip = 95124
      const key = 'abc'
      const expected =
        `http://api.openweathermap.org/data/2.5/weather?` +
        `q=${zip}` + `&units=imperial` + `&APPID=${key}`

      let actual = weatherApp.buildWeatherUrl(zip, key)
      assert.equal(actual, expected)
    })
  })
})
