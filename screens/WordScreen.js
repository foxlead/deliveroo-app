import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import BuyIcon from '../components/BuyIcon';

const WordScreen = () => {
    const navigation = useNavigation();

    const {
        params: {
            id,
            imgurl,
            title,
        },
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,            
        });

    }, []);

    // TEMPORAIRE ? 
    useEffect(() => {
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            display: "none"
          }
        });
        return () => navigation.getParent()?.setOptions({
          tabBarStyle: undefined
        });
      }, [navigation]);
  return (
    <>
    <BuyIcon />
    <ScrollView>
    <View className="relative">
        <Image
            source={{
                uri: imgurl,
            }} 
        className="w-full h-56 bg-gray-300 p-4" />
        <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
    </View>
    <View className="bg-white">
        <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text className="text-xs ☐text-gray-500">
                        <Text className="text-green-500">4.5</Text> Entreprise
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-xs ☐text-gray-500">Nearby test</Text>
                </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">test</Text>
        </View>
    </View>
</ScrollView>
</>
  )
}

export default WordScreen