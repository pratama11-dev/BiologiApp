import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { 
    alatListReducer,
    alatDetailReducer
} from "./reducers/alatReducer";
import { userSigninReducer } from "./reducers/userReducer";



const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo') 
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null
    }
};
const reducer = combineReducers({
    alatList: alatListReducer,
    alatDetail: alatDetailReducer,
    userSignin: userSigninReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;