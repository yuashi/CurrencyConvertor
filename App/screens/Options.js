import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert, StatusBar} from'react-native';
import colors from '../constants/colors';
import {Entypo} from '@expo/vector-icons';
import {RowItem,RowSeparator} from '../components/RowItem';


const openUrl = (url) => {
    return Linking.openURL(url).catch( () => {
            Alert.alert('Sorry, something went wrong.','Please try again later.');
        });
}

export default () => {
    return(
       <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? 25 : 0}}>
           <StatusBar barStyle='dark-content' backgroundColor={colors.white}/>
           <ScrollView>
            <RowItem rightIcon={ <Entypo name="chevron-right" size={20} color={colors.blue}/>} 
                     text="Themes" 
                     onPress={() => alert("todo!")}/>

           <RowSeparator/>

           <RowItem rightIcon={ <Entypo name="export" size={20} color={colors.blue}/>} 
                     text="React Native Basics" 
                     onPress={() => openUrl('http://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter')}/>

           <RowSeparator/>

           <RowItem rightIcon={ <Entypo name="export" size={20} color={colors.blue}/>} 
                     text="React Native By Example" 
                     onPress={() => openUrl('https://reactnativebyexample.com')}/>

            </ScrollView>  
       </SafeAreaView>

    );
};