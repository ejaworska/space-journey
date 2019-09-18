const createData = (name, 
                    closeApproachDate, 
                    distance, 
                    diameterMin, 
                    diameterMax, 
                    velocity, 
                    orbitingBody, 
                    url) => {
    return {  name, 
    closeApproachDate, 
    distance, 
    diameterMin, 
    diameterMax, 
    velocity, 
    orbitingBody, 
    url};
}

const neoArray = data => {
    const arrayOfArrays = Object.values(data);
    const mergedData = [].concat.apply([], arrayOfArrays);
    return mergedData;
}

export const rowsArray = data => {
    const neos = neoArray(data);
    const result = [];

    for(let key in neos) {
        const neo = neos[key];

        result.push(createData(neo.name, 
        neo.close_approach_data[0].close_approach_date,
        neo.estimated_diameter.meters.estimated_diameter_min,
        neo.estimated_diameter.meters.estimated_diameter_max,
        neo.close_approach_data[0].miss_distance.kilometers,
        neo.close_approach_data[0].relative_velocity.kilometers_per_hour,
        neo.close_approach_data[0].orbiting_body,
        neo.nasa_jpl_url));
    }
    return result.sort((a, b) => (a.closeApproachDate < b.closeApproachDate ? -1 : 1));
};

