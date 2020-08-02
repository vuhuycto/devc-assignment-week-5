import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import defaultStyles from './../../configs/styles';

function EndLoadingIndicator({ size, color = 'white' }) {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				name='record-circle'
				size={size}
				color={defaultStyles.colors[color]}
			/>
		</View>
	);
}

EndLoadingIndicator.propTypes = {
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'tertiary',
		'grey',
		'white',
		'black',
		'danger',
		'active',
		'light',
		'dark',
	]),
	size: PropTypes.number,
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default EndLoadingIndicator;
