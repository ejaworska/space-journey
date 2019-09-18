import { FETCH_NEO, TOGGLE_START_CALENDAR, TOGGLE_END_CALENDAR, START_LOADING, STOP_LOADING, SET_UP_START_DATE, SET_UP_END_DATE } from '../actions/types';

const initialState = {
    data: {},
    startDate: '',
    endDate: '',
    isOpenStartCalendar: false,
    isOpenEndCalendar: false,
    isLoading: true,
    isDisabledEndCalendar: true
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_NEO:
            console.log(action.payload)
            return {
                ...state,
                data: action.payload
            }
        case TOGGLE_START_CALENDAR:
            return {
                ...state,
                isOpenStartCalendar: !state.isOpenStartCalendar
            }
        case TOGGLE_END_CALENDAR:
            return {
                ...state,
                isOpenEndCalendar: !state.isOpenEndCalendar
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
        case SET_UP_START_DATE:
            return {
                ...state,
                startDate: action.payload,
                isDisabledEndCalendar: false
            }
        case SET_UP_END_DATE:
            return {
                ...state,
                endDate: action.payload,
                isDisabledEndCalendar: true
        }
        default:
            return state;
    }
}