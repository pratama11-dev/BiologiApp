import { 
    ALAT_DETAILS_FAIL,
    ALAT_DETAILS_REQUEST,
    ALAT_DETAILS_SUCCESS,
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

export const alatDetailReducer = (
    state = { alat: {}, loading: true },
    action 
    ) => {
        switch(action.type) {
            case ALAT_DETAILS_REQUEST:
                return { loading: true };
            case ALAT_DETAILS_SUCCESS:
                return { loading: false, alat: action.payload };
            case ALAT_DETAILS_FAIL:
                return { loading: false, error: action.payload };
            default:
                return state;
        }
    };
