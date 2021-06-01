//! this commented function retrieves current user location from browser. may be useful in calculating distance to destination from location
/* export function getCurrentLatLng() {
    // Wrap getCurrentPosition to return a promise
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((pos) =>
            resolve({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            })
        );
    });
} */

export const getLatLngFromInput = async (address) => {
    let coor = { lat: null, lng: null };

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_MAPS_API}`
        );
        const data = await response.json();
        coor.lat = data.results[0].geometry.location.lat;
        coor.lng = data.results[0].geometry.location.lng;
    } catch (error) {
        // console.log(error);
    }

    return new Promise(function (myResolve) {
        myResolve(coor);
    });
};
