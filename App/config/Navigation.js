import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import {Entypo } from '@expo/vector-icons';
import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';
import {ConversionContextProvider} from '../util/ConversionContext';
import colors from '../constants/colors';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator 
     //headerMode="none" 
      //initialRouteName="Options"
      >
        <MainStack.Screen name="Home" component={Home} options={{ headerShown:false}}/>
        <MainStack.Screen name="Options" component={Options} />
        {/*<MainStack.Screen name="CurrencyList" component={CurrencyList} options={({route}) =>({
                                                                         title:route.params.title, 
                                                                         })}
        />*/}
    </MainStack.Navigator>
);
const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
      <ModalStack.Navigator mode="modal">
          <ModalStack.Screen 
            name="Main"
            component={MainStackScreen}
            options={{headerShown:false}}/>
          <ModalStack.Screen name="CurrencyList" component={CurrencyList} options={({navigation,route}) =>({
                                                                         title:route.params && route.params.title, 
                                                                         headerLeft:null,
                                                                         headerRight:()=>(
                                                                             <TouchableOpacity onPress={ ()=> navigation.pop()} style={{paddingHorizontal:10}}>
                                                                                 <Entypo name="cross" size={30} color={colors.blue}/>
                                                                             </TouchableOpacity>
                                                                         ),
                                                                         })}
           />                                                              
      </ModalStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <ConversionContextProvider>
          <ModalStackScreen />
        </ConversionContextProvider>
    </NavigationContainer>
);
