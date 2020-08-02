import React from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

function Screen({ children }) {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});

export default Screen;
