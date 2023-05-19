import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ArrowTrendingUpIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';

const ActionCard = ({
    id,
    imgurl,
    title,
    price,
}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Word', {
                    id,
                    imgurl,
                    title,  
                    price,                 
                })
            }}
            className="px-4 py-4 shadow-sm rounded-xl bg-white flex-row mb-3 space-x-1">
            <Image
                source={{
                    uri: imgurl
                }}
                className="h-10 w-10 bg-gray-300 p-4 rounded-full mr-1 aspect-square"
            />
            <View className="flex-1 justify-center ">
                <Text >{title}</Text>
                <Text className="text-gray-400 text-xs  pt-1">500,000 actions - 78.00 €</Text>
            </View>
            <View className="items-end justify-center">
                <Text className="font-semibold">{price} €</Text>
                {/* <View className="flex-row bg-[#8fe093]  space-x-1 rounded-3xl px-1 pt-1 pb-1 ">
                    <ArrowTrendingUpIcon size={15} color="white" />
                    <Text className="text-xs text-white">25.20%</Text>
                </View> */}
                <View className="flex-row space-x-1  pt-1">
                    <ArrowTrendingUpIcon size={15} color="#8fe093" />
                    <Text className="text-xs text-[#8fe093]">25.20%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ActionCard