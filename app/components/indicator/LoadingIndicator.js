import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import defaultStyles from './../../configs/styles';

function LoadingIndicator({ size, color = 'primary' }) {
	return (
		<View style={styles.loading}>
			<ActivityIndicator size={size} color={defaultStyles.colors[color]} />
		</View>
	);
}

LoadingIndicator.propTypes = {
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
	loading: {
		paddingVertical: 10,
	},
});

export default LoadingIndicator;
