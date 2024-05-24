import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Name = () => {
  return (
    <View  >
      <Text style={styles.textEdit}>
      My name is <Text style={{ fontWeight: 'bold' }}>Obed Sarkodie</Text>
    </Text>
    </View>
  )
}

export default Name

const styles = StyleSheet.create({
    
    textEdit:{
        color:'blue',
        fontSize:24,
        
    }
})