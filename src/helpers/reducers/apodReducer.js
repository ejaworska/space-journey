import { FETCH_APOD, TOGGLE_CALENDAR, START_LOADING, STOP_LOADING } from '../actions/types';

const initialState = {
    data: {},
    isOpenCalendar: false,
    isLoading: true
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_APOD:
            return {
                ...state,
                data: action.payload
            }
        case TOGGLE_CALENDAR:
            return {
                ...state,
                isOpenCalendar: !state.isOpenCalendar
            }
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}