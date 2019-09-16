import { SET_BUSINESS, SET_LOADING } from "../types";

let initialState = {
    businesses: [],
    loading: false
};


export default function application(state=initialState, action){
    switch(action.type){
        case SET_BUSINESS:
            return {...state, businesses: action.data, loading: false};
        case SET_LOADING:
            return {...state, loading: action.data};
        default:
            return state;
    }
}