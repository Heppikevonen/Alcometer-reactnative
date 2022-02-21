import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  ScrollView,
  Picker,
  TextInput,
  Button,
  Alert
} from 'react-native'
import { useState, useEffect } from 'react'
import StyleSheet from './styles/style'
import Radiobuttons from './components/Radiobuttons'

export default function App () {
  const [weight, setWeight] = useState('')
  const [bottles, setBottles] = useState()
  const [time, setTime] = useState()
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState()
  const bottleArray = Array()
  const timeArray = Array()
  const genders = ['male', 'female']

  for (let i = 1; i <= 30; i++) {
    bottleArray.push(i)
  }
  for (let i = 1; i <= 24; i++) {
    timeArray.push(i)
  }

  function showAlert () {
    Alert.alert('Idiot', 'Please provide weight.', [
      {
        text: 'OK'
      }
    ])
  }

  function calculate () {
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - burning * time
    let promilles = ''

    if (weight == 0 || '') {
      showAlert()
    } else if (gender === 'male') {
      promilles = (gramsLeft / (weight * 0.7))
    } else {
      promilles = (gramsLeft / (weight * 0.6))
    }

    if (promilles < 0) {
      promilles = 0
    }
    setResult(promilles)
  }

  function chooseItemColor () {
    let color = ''
    if (result > 1.5) {
      color = 'red'
    } else if (result > 0.5) {
      color = 'yellow'
    } else {
      color = 'green'
    }
    return color
  }

  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <Text style={StyleSheet.header}>Alcometer</Text>
        <View style={StyleSheet.weight}>
          <Text style={StyleSheet.pickerheader}>Weight</Text>
          <TextInput
            style={StyleSheet.textinput}
            keyboardType='number-pad'
            value={weight}
            onChangeText={setWeight}
          ></TextInput>
        </View>
        <View>
          <Text style={StyleSheet.pickerheader}>Bottles</Text>
          <Picker
            selectedValue={bottles}
            onValueChange={(itemValue, itemIndex) => setBottles(itemValue)}
          >
            {bottleArray.map(item => (
              <Picker.Item key={item} label={`${item} bottles`} value={item} />
            ))}
          </Picker>
        </View>
        <View>
          <Text style={StyleSheet.pickerheader}>Time</Text>
          <Picker
            selectedValue={time}
            onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
          >
            {timeArray.map((item, i) => (
              <Picker.Item label={`${item} hours`} value={item} />
            ))}
          </Picker>
        </View>
        <View>
          <Text style={StyleSheet.pickerheader}>Gender</Text>
          <Radiobuttons
            options={genders}
            onPress={value => setGender(value)}
            defaultValue={'male'}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
            paddingBottom: 20,
            color: chooseItemColor()
          }}
        >
          {result.toFixed(2)}
        </Text>
        <Button onPress={calculate} title='Calculate' />
        <StatusBar style='auto' />
      </ScrollView>
    </View>
  )
}
