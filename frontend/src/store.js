import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { 
    alatListReducer,
    alatDetailReducer,
    alatCreateReducer,
    alatSaveReducer,
    alatDeleteReducer
} from "./reducers/alatReducer";
import { 
    userRegisterReducer, 
    userSigninReducer 
} from "./reducers/userReducer";



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
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    alatCreate: alatCreateReducer,
    alatSave: alatSaveReducer,
    alatDelete: alatDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;