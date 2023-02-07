import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export interface Iprops {
  route: any;
  navigation: {
    navigate: (arg0?: string, arg1?: Object) => void;
    goBack: () => void;
  }
}

export const Home = ({ navigation }: Iprops): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("CryptoDetail")}
      >
        <Text>Navigate to CryptoDetail</Text>
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

