import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import Styles from './styles'

const Splash = (props) => {
   useEffect( () => {
    setTimeout(() => {
            props.navigation.navigate('App')
        }, 3000);
    });
    return(
        <View style={Styles.container}>
    <Text style={Styles.brandText}>Unified</Text>
  </View>
    )
}
  

export default Splash