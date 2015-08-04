'use strict';

import FluxStore from 'react-components/flux-store';
import AppDispatcher from 'react-components/dispatcher';
import PolicyRangesConstants from './policy-ranges-constants';

let range = [];

class PolicyRangesStore extends FluxStore {
	get range() {
		return range;
	}
}

let _PolicyRangesStore = new PolicyRangesStore();
export default _PolicyRangesStore;

AppDispatcher.register((payload) => {
	if(payload.action.type == PolicyRangesConstants.POLICY_RANGE_FETCHED) {
		range = payload.action.range;
		_PolicyRangesStore.emitChange();
	}
});
