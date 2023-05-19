import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop:10,
        }}
        horizontal 
        showsHorizontalScrollIndicator={false}>

        {/* CategoriesCard */}
        
        <CategoryCard 
            imgUrl="https://loremflickr.com/320/240/food" 
            title="Testing 1" />
        
          <CategoryCard
              imgUrl="https://loremflickr.com/320/240/food"
              title="Testing 1" />
          <CategoryCard
              imgUrl="https://loremflickr.com/320/240/food"
              title="Testing 1" />
          <CategoryCard
              imgUrl="https://loremflickr.com/320/240/food"
              title="Testing 1" />
          <CategoryCard
              imgUrl="https://loremflickr.com/320/240/food"
              title="Testing 1" />
          <CategoryCard
              imgUrl="https://loremflickr.com/320/240/food"
              title="Testing 1" />
          <CategoryCard
              imgUrl="https://loremflickr.com/320/240/food"
              title="Testing 1" />
          <CategoryCard
              imgUrl="https://loremflickr.com/320/240/food"
              title="Testing 1" />
          <CategoryCard
              imgUrl="https://loremflickr.com/320/240/food"
              title="Testing 1" />
          <CategoryCard
              imgUrl="https://loremflickr.com/320/240/food"
              title="Testing 1" />

    </ScrollView>
  )
}

export default Categories