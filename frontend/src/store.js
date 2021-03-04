import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { 
    alatListReducer,
    alatDetailReducer
} from "./reducers/alatReducer";



const initialState = {};
const reducer = combineReducers({
    alatList: alatListReducer,
    alatDetail: alatDetailReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;