import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import moment from 'moment';

import Card from './../components/Card';
import Screen from './../screens/Screen';
import {
	LoadingIndicator,
	ErrorLoadingIndicator,
	MoreLoadingIndicator,
} from './../components/indicator';
import defaultStyles from './../configs/styles';
import routes from './../navigation/routes';
import filterUnique from './../utils/filterUnique';
import getNewsApi from './../api/news';

function NewsListScreen({ navigation }) {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasApiError, setHasApiError] = useState(false);
	const [lastPageReached, setLastPageReached] = useState(false);

	const getNews = async () => {
		try {
			const response = await getNewsApi(pageNumber);
			const { articles } = await response.json();

			if (articles.length === 0) {
				setLastPageReached(true);
				return;
			}

			setNews(filterUnique(news.concat(articles)));
			setPageNumber(pageNumber + 1);
		} catch (error) {
			setHasApiError(true);
		}

		setLoading(false);
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<Screen>
			{loading ? (
				<LoadingIndicator size={20} />
			) : hasApiError ? (
				<ErrorLoadingIndicator />
			) : (
				<FlatList
					data={news}
					keyExtractor={(item) => item.title}
					style={styles.container}
					renderItem={({ item }) => (
						<Card
							imageUrl={item.urlToImage}
							author={item.author}
							title={item.title}
							publishedDate={moment(item.publishedAt).format('LLL')}
							description={item.description}
							onPress={() => navigation.navigate(routes.NEWS_DETAILS, item)}
						/>
					)}
					onEndReached={getNews}
					onEndReachedThreshold={1}
					ListFooterComponent={() => (
						<View style={styles.endReached}>
							<MoreLoadingIndicator isMore={lastPageReached} />
						</View>
					)}
				/>
			)}
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: defaultStyles.colors.light,
		paddingHorizontal: 15,
	},
	endReached: {
		paddingBottom: 10,
	},
});

export default NewsListScreen;
