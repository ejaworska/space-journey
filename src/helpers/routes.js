const serverUrl = 'https://api.nasa.gov/';
const apiKey= 'BKEvf42CFSgtLYFcIJPdwbaVYvGfsVkNmOTPauCr';

const apodResource = 'planetary/apod';
const neoResource = 'neo/rest/v1/feed';
const epicResource ='EPIC/api/natural/date/2015-10-31';

export const pictureOfTheDayUrl = day => {
    return `${serverUrl}${apodResource}?date=${day}&api_key=${apiKey}`;
}

export const nearEarthObjectsUrl = (startDay, endDay) => {
    return `${serverUrl}${neoResource}?start_date=${startDay}&end_date=${endDay}&api_key=${apiKey}`;
}

export const epicUrl = () => {
    return `${serverUrl}${epicResource}?&api_key=${apiKey}`;
}

//https://api.nasa.gov/planetary/apod?api_key=BKEvf42CFSgtLYFcIJPdwbaVYvGfsVkNmOTPauCr