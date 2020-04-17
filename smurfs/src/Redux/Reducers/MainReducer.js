import { ASYNC_START, ADD_SMURF_SUCCESS, FETCH_SMURF_SUCCESS, ASYNC_FAIL } from '../Actions/MainActions';

const initState = {
    loading: false,
    smurfs: [],
    error: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case ASYNC_START:
            return {
                ...state,
                loading: true,
            }
        case ASYNC_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case FETCH_SMURF_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                smurfs: action.payload,
            }
        }
        case ADD_SMURF_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                smurfs: action.payload,
            }
        }
        default:
            return state;
    }
}