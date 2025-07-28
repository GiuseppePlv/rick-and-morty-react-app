import axios from 'axios';

const path = 'https://rickandmortyapi.com/api'
const apiCharacter = '/character/';
const apiLocation = '/location/';
const apiEpisodes = '/episode/';

const headers = {
    'Content-Type': 'text/plain'
};

export const getCharacter = (page, filters) => {
    return axios.get(`${path}${apiCharacter}?page=${page}`, {
            headers,
            params: {
                ...filters
            }
        })
        .then(res => res.data)
        .catch(error => {
            console.log("Error =>", error);
        });
}

export const getLocations = (page, filters) => {
    return axios.get(`${path}${apiLocation}?page=${page}`, {
            headers,
            params: {
                ...filters
            }
        })
        .then(res => res.data)
        .catch(error => {
            console.log("Error =>", error);
        });
}

export const getEpisodes = (page, filters) => {
    return axios.get(`${path}${apiEpisodes}?page=${page}`, {
            headers,
            params: {
                ...filters
            }
        })
        .then(res => res.data)
        .catch(error => {
            console.log("Error =>", error);
        });
}

export const getEpisodesByValue = (params) => {
    return axios.get(`${path}${apiEpisodes}/${params}`, {
            headers,
        })
        .then(res => res.data)
        .catch(error => {
            console.log("Error =>", error);
        });
}