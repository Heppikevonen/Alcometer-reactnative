import { StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'
import chooseItemColor from '../App'

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  label: {
    marginRight: 10
  },
  circle: {
    height: 28,
    width: 28,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: 'hotpink'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight + 20 : 0,
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20
  },
  pickerheader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  textinput: {
    fontSize: 20
  },
  weight: {
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 1,
    marginBottom: 15
  }
})
