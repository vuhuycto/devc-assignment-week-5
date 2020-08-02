import React from 'react';

import LoadingIndicator from './LoadingIndicator';
import EndLoadingIndicator from './EndLoadingIndicator';

function MoreLoadingIndicator({ isMore }) {
	return isMore ? (
		<EndLoadingIndicator size={20} />
	) : (
		<LoadingIndicator size={20} />
	);
}

export default MoreLoadingIndicator;
