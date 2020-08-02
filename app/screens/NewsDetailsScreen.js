import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	ScrollView,
	Text,
	Linking,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

import trim from './../utils/trim';
import defaultStyles from './../configs/styles';
import Link from '../components/Link';

function NewsDetailsScreen({ route }) {
	const article = route.params;

	const handleOpenLink = async (url) => {
		const supported = await Linking.canOpenURL(url);

		if (supported) Linking.openURL(url);
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					source={{ uri: article.urlToImage }}
					style={styles.image}
					resizeMode='cover'
				/>
				<View style={styles.details}>
					<View style={styles.header}>
						<Text style={styles.title}>{trim(article.title)}</Text>
						{article.author ? (
							<Text style={styles.author}>{trim(article.author)}</Text>
						) : null}
						{article.publishedAt ? (
							<Text style={styles.publishedDate}>
								{moment(trim(article.publishedAt)).format('LLL')}
							</Text>
						) : null}
					</View>
					<Text style={styles.description}>{trim(article.description)}</Text>
					<Text style={styles.content}>{trim(article.content)}</Text>
					<Link onPress={() => handleOpenLink(article.url)}>
						<View style={styles.link}>
							<Text style={styles.linkText}>Open on your browser</Text>
							<AntDesign
								name='arrowright'
								size={15}
								color={defaultStyles.colors.primary}
							/>
						</View>
					</Link>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 250,
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
	description: {
		fontSize: 20,
	},
	content: {
		marginTop: 10,
		fontSize: 15,
	},
	link: {
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
	},
	linkText: {
		color: defaultStyles.colors.primary,
		marginRight: 5,
	},
});

export default NewsDetailsScreen;
