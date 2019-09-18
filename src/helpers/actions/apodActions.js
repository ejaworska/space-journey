import { FETCH_APOD, TOGGLE_CALENDAR } from './types';
import { pictureOfTheDayUrl } from '../routes';

export const fetchApodOfDate = day => dispatch => {
    fetch(pictureOfTheDayUrl(day))
    .then(res => res.json())
    .then(apod => dispatch({
        type: FETCH_APOD,
        payload: apod
    }));
}

export const toggleCalendar = () => dispatch => {
    dispatch({
        type: TOGGLE_CALENDAR
    })
}




