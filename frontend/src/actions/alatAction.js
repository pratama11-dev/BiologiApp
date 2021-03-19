import axios from "axios";
import { 
    ALAT_CREATE_FAIL,
    ALAT_CREATE_REQUEST,
    ALAT_CREATE_SUCCESS,
    ALAT_DELETE_FAIL,
    ALAT_DELETE_REQUEST,
    ALAT_DELETE_SUCCESS,
    ALAT_DETAILS_FAIL,
    ALAT_DETAILS_REQUEST,
    ALAT_DETAILS_SUCCESS,
    ALAT_LIST_FAIL,
    ALAT_LIST_REQUEST, 
    ALAT_LIST_SUCCESS, 
    ALAT_SAVE_FAIL, 
    ALAT_SAVE_REQUEST,
    ALAT_SAVE_SUCCESS} 
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
};

export const saveAlat = (alat) => async (dispatch, getState) => {
    try {
      dispatch({type: ALAT_SAVE_REQUEST, payload: alat});
      const {userSignin: {userInfo}} = getState();
      if(!alat._id){
        const { data } = await axios.post('/api/alat', alat, { 
          headers:{
          'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({type: ALAT_SAVE_SUCCESS, payload: data});
      } else{
        const { data } = await axios.put('/api/alat/' + alat._id, alat, { 
          headers:{
          'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({type: ALAT_SAVE_SUCCESS, payload: data});
      }
      
    } catch (error) {
      dispatch({type: ALAT_SAVE_FAIL, payload: error.message});
    }
  }

export const deleteAlat = (alatId) => async (dispatch, getState) => {
    try {
      const { userSignin: { userInfo } } = getState();
      dispatch({ type: ALAT_DELETE_REQUEST, payload: alatId });
      const { data } = await axios.delete("/api/alat/" + alatId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: ALAT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: ALAT_DELETE_FAIL, payload: error.message });
  
    }
  }
  
export const createAlat = () => async (dispatch, getState) => {
    dispatch({ type: ALAT_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(
        '/api/alat',
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: ALAT_CREATE_SUCCESS,
        payload: data.alat,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ALAT_CREATE_FAIL, payload: message });
    }
  };
  
//   export const updateProduct = (alat) => async (dispatch, getState) => {
//     dispatch({ type: ALAT_UPDATE_REQUEST, payload: alat });
//     const {
//       userSignin: { userInfo },
//     } = getState();
//     try {
//       const { data } = await axios.put(`/api/alat/${alat._id}`, alat, {
//         headers: { Authorization: `Bearer ${userInfo.token}` },
//       });
//       dispatch({ type: ALAT_UPDATE_SUCCESS, payload: data });
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       dispatch({ type: ALAT_UPDATE_FAIL, error: message });
//     }
//   };