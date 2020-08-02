import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NewsNavigator from './app/navigation/NewsNavigator';
import { StatusBar } from 'react-native';

export default function App() {
	return (
		<>
			<StatusBar barStyle='light-content' />
			<NavigationContainer>
				<NewsNavigator />
			</NavigationContainer>
		</>
	);
}
