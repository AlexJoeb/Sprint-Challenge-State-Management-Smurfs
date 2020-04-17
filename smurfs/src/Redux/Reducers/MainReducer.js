import { ASYNC_START, UPDATE_SMURF, ASYNC_FAIL } from '../Actions/MainActions';

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
        case UPDATE_SMURF: {
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