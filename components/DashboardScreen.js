import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowTrendingUpIcon, PlusCircleIcon, TrophyIcon } from 'react-native-heroicons/solid'
import ActionCard from './ActionCard'

const DashboardScreen = () => {
  return (
    <ScrollView className="bg-gray-100 pt-12">

      {/* Header */}
      <View className="bg-white pb-6">
        <View className="pb-6 rounded-b-3xl bg-gray-100 pt-5 mx-1">
          <View className="flex-row pb-5 items-center mx-4 mt-4 space-x-2">
            <Image
              source={{
                uri: "https://assets.afcdn.com/story/20191115/2031747_w944h530c1cx659cy235cxt0cyt0cxb1280cyb720.webp"
              }}
              className="h-10 w-10 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1 flex-row items-center">
              <Text className="font-bold text-xl flex-1">
                AlCapone
              </Text>
              <PlusCircleIcon size={35} />
            </View>
          </View>
          <View className="flex-col mx-4">
            <Text className="font-bold pb-1 text-gray-400 text-xs">Total balance</Text>
            <Text className="pb-3 font-bold text-4xl">490,598.80 €</Text>
          </View>
          <View className="mx-4 items-start">
            <View className="flex-row bg-[#8fe093] space-x-2 rounded-3xl px-2 pt-2 pb-2 ">
              <ArrowTrendingUpIcon size={15} color="white" />
              <Text className="font-bold text-white">4,511.00 € (12.55%)</Text>

            </View>
          </View>

        </View>
      </View>

      {/* Actions */}
      <View className="bg-white">
        <View className="mx-4 pb-6">
          <Text className="font-bold text-xl pb-4">Mes Actions</Text>

          {/* ActionCards */}
          <ActionCard
            id="123"
            imgurl="https://sf.football.fr/wp-content/uploads/2022/10/Karim-Benzema-Real-Madrid-6-750x368.jpg"
            title="Benzema"
            price="54.60"  />
          <ActionCard
            id="123"
            imgurl="https://fr.web.img6.acsta.net/c_310_420/pictures/20/01/16/09/48/3201727.jpg"
            title="Will Smith" 
            price="18.65" />
          <ActionCard
            id="123"
            imgurl="https://cdn.vectorstock.com/i/1000x1000/30/75/tennis-ball-icon-flat-style-vector-24973075.webp"
            title="tennis"
            price="35.20"  />
          <ActionCard
            id="123"
            imgurl="https://cdn.icon-icons.com/icons2/1860/PNG/512/beach_118051.png"
            title="vacances"
            price="5.20" />





        </View>
        <View className=" mx-4">

          <Text className="font-bold text-xl pb-4">Historique récent</Text>

          <ActionCard
            id="123"
            imgurl="https://fr.web.img6.acsta.net/c_310_420/pictures/20/01/16/09/48/3201727.jpg"
            title="Will Smith"
            price="5.20"  />
          <ActionCard
            id="123"
            imgurl="https://fr.web.img6.acsta.net/c_310_420/pictures/20/01/16/09/48/3201727.jpg"
            title="Will Smith"
            price="5.20"  />

        </View>
      </View>
    </ScrollView>
  )
}

export default DashboardScreen