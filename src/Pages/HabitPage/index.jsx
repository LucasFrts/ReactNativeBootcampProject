import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HabitPage() {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
            <TouchableOpacity
            style={styles.backPageBtn} onPress={()=> navigation.goBack()}>
                <Image
                source={require('../../assets/icons/arrowBack.png')}
                style={styles.arrowBack}/>
            </TouchableOpacity>
            <View style={styles.mainContent}></View>
        </View>
      </ScrollView>
    </View> 
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba(21,21,21, 0.98)"
    },
    backPageBtn:{
        width:40,
        height: 40,
        margin: 25
    },
    arrowBack:{
        width: 40,
        heigth: 40,
    },
    mainContent:{
        wdith: 250,
        alignSelf: 'center'
    }

    })
