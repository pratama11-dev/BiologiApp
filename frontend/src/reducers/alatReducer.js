import { 
    ALAT_CREATE_FAIL,
    ALAT_CREATE_REQUEST,
    ALAT_CREATE_RESET,
    ALAT_CREATE_SUCCESS,
    ALAT_DELETE_FAIL,
    ALAT_DELETE_REQUEST,
    ALAT_DELETE_SUCCESS,
    ALAT_DELETE_RESET,
    ALAT_DETAILS_FAIL,
    ALAT_DETAILS_REQUEST,
    ALAT_DETAILS_SUCCESS,
    ALAT_LIST_FAIL, 
    ALAT_LIST_REQUEST, 
    ALAT_LIST_SUCCESS, 
    ALAT_SAVE_FAIL, 
    ALAT_SAVE_REQUEST,
    ALAT_SAVE_SUCCESS,
    ALAT_UPDATE_REQUEST,
    ALAT_UPDATE_SUCCESS,
    ALAT_UPDATE_FAIL,
    ALAT_UPDATE_RESET} 
    from "../constants/alatConstants";

export const alatListReducer = (
    state = { loading:true, alat: [] }, 
    action
    ) => {
    switch(action.type){
        case ALAT_LIST_REQUEST:
            return {loading : true, alat: [] };
        case ALAT_LIST_SUCCESS:
            return {loading : false, alat: action.payload, success: true}
        case ALAT_LIST_FAIL:
            return {loading : false, error: action.payload}
        default:
            return state;
    }
};

export const alatDetailReducer = (
    state = {loading: true },
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

export const alatCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ALAT_CREATE_REQUEST:
          return { loading: true };
        case ALAT_CREATE_SUCCESS:
          return { loading: false, success: true, alat: action.payload };
        case ALAT_CREATE_FAIL:
          return { loading: false, error: action.payload };
        case ALAT_CREATE_RESET:
          return {};
        default:
          return state;
    }
};

export const alatUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case ALAT_UPDATE_REQUEST:
        return { loading: true };
      case ALAT_UPDATE_SUCCESS:
        return { loading: false, success: true, alat: action.payload };
      case ALAT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case ALAT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

export function alatSaveReducer(state = { alat: {} }, action) {

    switch (action.type) {
      case ALAT_SAVE_REQUEST:
        return { loading: true };
      case ALAT_SAVE_SUCCESS:
        return { loading: false, success: true, alat: action.payload };
      case ALAT_SAVE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  }

export function alatDeleteReducer(state = {}, action) {
    switch (action.type) {
      case ALAT_DELETE_REQUEST:
        return { loading: true };
      case ALAT_DELETE_SUCCESS:
        return { loading: false, alat: action.payload, success: true};
      case ALAT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case ALAT_DELETE_RESET:
        return {};
      default:
        return state;
    }
}