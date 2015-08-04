import PolicyRangesSlave from './policy-ranges-slave';
import AppDispatcher from 'react-components/dispatcher';
import PolicyRangesConstants from './policy-ranges-constants';

export default {
    fetch: (agencyId) => {
        PolicyRangesSlave.fetch(agencyId).then((range) => {
        AppDispatcher.handleViewAction({
            type: PolicyRangesConstants.POLICY_RANGE_FETCHED,
            range: range
        });
      });
    }
}
