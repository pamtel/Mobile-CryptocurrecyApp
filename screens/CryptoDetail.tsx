import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Iprops } from './Home'

export const CryptoDetail = ({ navigation }: Iprops): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>CryptoDetail</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Transaction")}
      >
        <Text>Navigate to Transaction</Text>
      </TouchableOpacity>
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
