import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Styles from './Styles'
import { TextInput, Button } from 'react-native-paper';
import { getNotes, saveNotes } from '../../utils/AsycUtils';

const DisplayScreen = (props) => {
    const [note, setNotes] = useState(props.route.params ? props.route.params.note :'');
    const textThemeConfig = {
        colors:
        {
            primary: 'white',
            background: 'orange'
        }
    }

    const addUpdateNote = async () => {
        if(!props.route.params){
            try {
                const myArray = await getNotes();
                if (myArray !== null) {
                    console.log(myArray)
                  await saveNotes([note, ...myArray]);
                }else{
                    try {
                        await saveNotes([note]);
                    } catch (error) {
                        // Error saving data
                    }
                }
              } catch (error) {
                // Error retrieving data
              }
              
          props.navigation.navigate('HomeScreen')
        }else{
            const myArray = await getNotes()
            const index = myArray.indexOf(props.route.params.note)
            myArray[index] = note
            await saveNotes(myArray);
            
          props.navigation.navigate('HomeScreen')
        }
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.buttonContainer}>
                <Button raised color="black" onPress={() => addUpdateNote()} style={Styles.button}>
                    save
                </Button>
            </View>
            <View style={Styles.textInput}>
                <TextInput
                    multiline
                    placeholder="Write Note"
                    numberOfLines={4}
                    value={note}
                    theme={textThemeConfig}
                    onChangeText={(notes) => { setNotes(notes) }}
                />
            </View>
        </View>
    )
}


export default DisplayScreen