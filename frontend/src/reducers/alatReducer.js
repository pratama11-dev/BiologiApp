import { 
    ALAT_LIST_FAIL, 
    ALAT_LIST_REQUEST, 
    ALAT_LIST_SUCCESS } 
    from "../constants/alatConstants";

export const alatListReducer = (
    state = { loading:true, alat: [] }, 
    action
    ) => {
    switch(action.type){
        case ALAT_LIST_REQUEST:
            return {loading : true };
        case ALAT_LIST_SUCCESS:
            return {loading : false, alat: action.payload}
        case ALAT_LIST_FAIL:
            return {loading : false, error: action.payload}
        default:
            return state;
    }
};