import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://cwa.roocdn.com/_next/static/social_media.cac4f21a.png"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now !
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>
            
            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon size={20} color = "gray" />
                    <TextInput 
                        placeholder="Restaurants and cuisines"
                        keyboardType='default' />
                </View>
                <AdjustmentsHorizontalIcon color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100">
                {/* Categories */}
                <Categories />

                {/* Featured */}
                <FeaturedRow 
                    id="123" 
                    title="Featured"
                    description="Paid palcements from our partners"/>

                {/* Tasty */}
                <FeaturedRow
                    id="123" 
                    title="Tasty Discounts"
                    description="Paid palcements from our partners" />
                
                {/* Offers near you */}
                <FeaturedRow
                    id="123" 
                    title="Offers near you"
                    description="Paid palcements from our partners" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen