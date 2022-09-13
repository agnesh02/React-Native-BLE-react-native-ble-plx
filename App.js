import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListBleDevicesScreen from './src/screens/ListBleDevicesScreen';
import DeviceaActionScreen from './src/screens/DeviceActionScreen';


function HomeScreen() {
	const naviagation = useNavigation()
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TouchableOpacity onPress={() => naviagation.navigate("List Devices")}>
				<Text>Go to device scanning screen</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{marginTop: 30}} onPress={() => naviagation.navigate("Device Action")}>
				<Text>Go to device action screen</Text>
			</TouchableOpacity>
		</View>
	);
}

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="List Devices" component={ListBleDevicesScreen} />
				<Stack.Screen name="Device Action" component={DeviceaActionScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
