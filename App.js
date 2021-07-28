import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './src/Routes/MainNavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
