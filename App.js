import React from 'react'
import MainNavigator from './src/navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
      <SafeAreaProvider>
        <MainNavigator/>
      </SafeAreaProvider>
  )
}