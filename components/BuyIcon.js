import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const BuyIcon = () => {

    const navigation = useNavigation();

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="mx-5 bg-blue-500 p-4 rounded-lg flex-row items-center space-x-1">
                {/* <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
                    10
                </Text> */}
                <Text className="flex-1 text-white font-extrabold text-lg text-center">
                    Acheter
                </Text>
          
            </TouchableOpacity>
        </View>
    )
}

export default BuyIcon