import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const Transaction = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Transaction</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  }
})
