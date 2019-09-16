import { SEARCH_BUSINESS, SET_LOADING } from "../types";

export const searchBusiness = data => {
    return {
        type: SEARCH_BUSINESS,
        data
    }
}

export const setLoading = data => {
    return {
        type: SET_LOADING,
        data
    }
}