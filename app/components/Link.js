import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

function Link({ onPress, children }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			{children}
		</TouchableWithoutFeedback>
	);
}

export default Link;
