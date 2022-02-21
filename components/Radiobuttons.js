import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import StyleSheet from '../styles/style'
export default function Radiobuttons ({ options, onPress, defaultValue }) {
  const [value, setValue] = useState(defaultValue)

  const handlePress = (selected) => {
    setValue(selected)
    onPress(selected)
  }

  return (
    <>
      {options.map((option, i) => (
        <View key={i} style={StyleSheet.buttonContainer}>
          <Text style={StyleSheet.label}>{option}</Text>
          <Pressable style={StyleSheet.circle} onPress={() => handlePress(option)}>{value === option && <View style={StyleSheet.checkedCircle} />}</Pressable>
        </View>
      ))}
    </>
  )
}