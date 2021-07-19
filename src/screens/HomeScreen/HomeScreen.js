import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { getNotes, saveNotes } from '../../utils/AsycUtils';

const Home = (props) => {
    const [note, setNotes] = useState([])
    useEffect(async() => {
        const myArray = await getNotes();
        if (myArray !== null) {
            setNotes(myArray)
        }
    },[note])

    const Delete = async (index) =>{
        var array = [...note]; // make a separate copy of the array
        if (index !== -1) {
          array.splice(index, 1);
          await saveNotes(array);
          const myArray = await getNotes();
        if (myArray !== null) {
            setNotes(myArray)
        }
        }
    }

    const RenderItems = ({item}, index) => {
        return (
            <View style={Styles.renderContainer}>
                <TouchableOpacity style={Styles.buttonContainerItem} onPress={()=>props.navigation.navigate('DisplayScreen',{note: item})}>
                <Text>{item}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.buttonContainer} onPress={() => Delete(index)}>
                    <Text style={Styles.addRowText}>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={Styles.container}>
            {
                note.length !== 0
                ?
                <FlatList 
                style={Styles.flatList}
                data={note}
                numColumns={2}
                renderItem={(item) => RenderItems(item)}
                keyExtractor={(item,index) => index.toString()}
            />
                :null
            }
            <View style={Styles.addRow}>
                <TouchableOpacity style={Styles.buttonContainer} onPress={() => props.navigation.navigate('DisplayScreen')}>
                    <View style={Styles.add}>
                        <Icon name="add" size={25} color='#FFFFFF' />
                    </View>
                    <Text style={Styles.addRowText}>Add note</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Home