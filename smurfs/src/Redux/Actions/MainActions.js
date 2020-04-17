import axios from 'axios';
import Axios from 'axios';

export const ASYNC_START = 'FETCH_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ASYNC_FAIL = 'FETCH_FAIL';

export const ADD_SMURF = 'ADD_SMURF';
export const REMOVE_SMURF = 'REMOVE_SMURF';

export const addSmurf = (name, age, height) => dispatch => {
    dispatch({ type: ASYNC_START });
    axios.post(`http://localhost:3333/smurfs`, {
        name, age, height
    }).then(({ data }) => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: data });
    }).catch(({ message }) => {
        console.error(message);
        dispatch({ type: ASYNC_FAIL, payload: message });
    })
}

export const fetchSmurfs = () => (dispatch, getState) => {
    dispatch({ type: ASYNC_START });
    axios.get(`http://localhost:3333/smurfs`)
        .then(({data}) => {
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: data });
        }).catch(err => {
            console.error(err.message);
            dispatch({ type: ASYNC_FAIL, payload: err.message });
        })
}