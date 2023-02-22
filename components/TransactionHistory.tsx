import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import { ITransactionHistory } from '../constants/dummy'

export const TransactionHistory = ({ customContainerStyle, history }: { customContainerStyle: any, history: ITransactionHistory[] }) => {
  const renderItem = (item: ITransactionHistory) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SIZES.base,
      }}
      onPress={() => console.log(item)}
    >
      <Image
        source={icons.transaction}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.primary,
        }}
      />
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h3 }}>{item.description}</Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  )
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle
      }}
    >
      <Text style={{ ...FONTS.h2, fontWeight: '700' }}>Transaction History</Text>
      <FlatList
        contentContainerStyle={{ marginTop: SIZES.radius }}
        scrollEnabled={false}
        data={history}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View style={{ width: "100%", height: 1, backgroundColor: COLORS.lightGray }}></View>
          )
        }}
      />
    </View>
  )
}

