import * as type from './types.js';
import { URL, API_KEY } from './../../../const/constans.js'
import axios from 'axios';

export const fetchData = (city) => {
    return (dispatch) => {
        return axios.get(`${URL}${city}&appid=${API_KEY}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: type.SHOW_WEATHER_INFO,
                    payload: data.list
                })
            })
            .catch(error => {
                dispatch({
                    type: type.SHOW_WEATHER_INFO,
                    payload: []
                })
                alert('City not found...')
                throw (error);
            });
    };
};