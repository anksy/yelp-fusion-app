import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {createBrowserHistory as createHistory} from "history";

// dev define reducer
import application from "./application";

const rootReducer = combineReducers({
    //routing: routerReducer,
    router: connectRouter(createHistory()),
    application
});

export default rootReducer;