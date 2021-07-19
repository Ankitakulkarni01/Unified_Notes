import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveNotes = async(note) =>{
    await AsyncStorage.setItem('note', JSON.stringify(note));
}

export const getNotes = async() =>{
    let user = await AsyncStorage.getItem('note', null);
    return JSON.parse(user);
}