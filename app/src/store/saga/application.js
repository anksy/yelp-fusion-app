import { takeLatest, call, put } from 'redux-saga/effects';
import { getBusinesses } from '../../api/search';
import { SEARCH_BUSINESS, SET_BUSINESS, SET_LOADING } from '../types';


export function* getBusiness(action) {
    /* loading on */
    yield put({ type: SET_LOADING, data: true });

    try {
        const businesses = yield call(getBusinesses, action.data);
        
        yield put({ type: SET_BUSINESS, data: (businesses.data && businesses.data.data) || [] });
    }catch (e) {
        yield put({ type: SET_LOADING, data: false });
    }
}

/**
 * map the dispatched action to the above function
 */
export default function* watchProfileData() {
    yield takeLatest(SEARCH_BUSINESS, getBusiness)
}
