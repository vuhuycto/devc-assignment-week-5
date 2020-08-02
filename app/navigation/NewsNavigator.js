import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';
import NewsListScreen from './../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import defaultStyles from './../configs/styles';

const Stack = createStackNavigator();

const NewsNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
			headerTransparent: true,
			headerTitle: false,
		}}
	>
		<Stack.Screen name={routes.NEWS_LIST} component={NewsListScreen} />
		<Stack.Screen
			name={routes.NEWS_DETAILS}
			component={NewsDetailsScreen}
			options={{
				headerShown: true,
				headerTintColor: defaultStyles.colors.white,
			}}
		/>
	</Stack.Navigator>
);

export default NewsNavigator;
