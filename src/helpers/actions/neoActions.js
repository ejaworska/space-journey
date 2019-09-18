import { FETCH_NEO, SET_UP_START_DATE, SET_UP_END_DATE,  TOGGLE_START_CALENDAR, TOGGLE_END_CALENDAR } from './types';
import { nearEarthObjectsUrl } from '../routes';

export const fetchNeo = (startDay, endDay) => dispatch => {
    fetch(nearEarthObjectsUrl(startDay, endDay))
    .then(res => res.json())
    .then(neo => dispatch({
        type: FETCH_NEO,
        payload: neo.near_earth_objects
    }));
}

export const setUpStartDate = startDate => dispatch => {
    dispatch({
        type: SET_UP_START_DATE,
        payload: startDate
    })
}

export const setUpEndDate = endDate => dispatch => {
    dispatch({
        type: SET_UP_END_DATE,
        payload: endDate
    })
}

export const toggleStartCalendar = () => dispatch => {
    dispatch({
        type: TOGGLE_START_CALENDAR
    })
}

export const toggleEndCalendar = () => dispatch => {
    dispatch({
        type: TOGGLE_END_CALENDAR
    })
}