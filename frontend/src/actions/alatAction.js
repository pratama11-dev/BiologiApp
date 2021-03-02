import axios from "axios";
import { 
    ALAT_LIST_FAIL,
    ALAT_LIST_REQUEST, 
    ALAT_LIST_SUCCESS } 
from "../constants/alatConstants"

export const listAlat = () => async (dispatch) => {
    dispatch({
        type: ALAT_LIST_REQUEST
    });
    try {
        const { data } = await axios.get('api/alat');
        dispatch({type: ALAT_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ALAT_LIST_FAIL, payload: error.message})
    }
};