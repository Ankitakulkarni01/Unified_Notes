/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Navigator from './src/utils/Navigator/Navigator';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.appContainer} >
                    <Navigator />
                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    }
});
export default App;