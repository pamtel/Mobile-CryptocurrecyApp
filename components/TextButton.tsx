import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'

interface ITextButton {
  label: string,
  customContainerStyle?: any,
  customLabelStyle?: any,
  onPress: () => void,
}

export const TextButton = ({ label, customContainerStyle, customLabelStyle, onPress }: ITextButton) => {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green,
        ...customContainerStyle
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, fontWeight: '600', ...FONTS.h3, ...customLabelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
