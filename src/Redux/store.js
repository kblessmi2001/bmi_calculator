
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { authReducer } from "./Auth/authReducer";
import { dataReducer } from "./Data/dataReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({authReducer,dataReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));