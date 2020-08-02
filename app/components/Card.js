import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import defaultStyles from './../configs/styles';
import trim from './../utils/trim';
import TextButton from './TextButton';

function Card({
	imageUrl,
	author,
	title,
	publishedDate,
	description,
	onPress,
}) {
	return (
		<View style={styles.card}>
			<Image
				source={{ uri: imageUrl }}
				style={styles.image}
				resizeMode='cover'
			/>
			<View style={styles.details}>
				<View style={styles.header}>
					<Text style={styles.title}>{trim(title)}</Text>
					{author ? <Text style={styles.author}>{trim(author)}</Text> : null}
					{publishedDate ? (
						<Text style={styles.publishedDate}>
							{trim(publishedDate)}
						</Text>
					) : null}
				</View>
				<Text>{trim(description)}</Text>
			</View>
			<View style={styles.buttonGroup}>
				<TextButton title='Read more' style={styles.button} onPress={onPress} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: defaultStyles.colors.white,
		marginBottom: 20,
	},
	details: {
		padding: 20,
	},
	header: {
		marginBottom: 15,
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
	},
	author: {
		fontSize: 16,
		color: defaultStyles.colors.medium,
		marginTop: 5,
	},
	publishedDate: {
		marginTop: 5,
		color: defaultStyles.colors.medium,
	},
	image: {
		width: '100%',
		height: 200,
	},
	buttonGroup: {
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	button: {
		width: 100,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Card;
