import axios from "axios";
import { 
    ALAT_DETAILS_FAIL,
    ALAT_DETAILS_REQUEST,
    ALAT_DETAILS_SUCCESS,
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

export const detailAlat = (alatId) => async (dispatch) => {
    dispatch ({type: ALAT_DETAILS_REQUEST, payload: alatId});
    try {
        const { data } = await axios.get(`/api/alat/${alatId}`);
        dispatch({ type: ALAT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ALAT_DETAILS_FAIL,
            payload :
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}