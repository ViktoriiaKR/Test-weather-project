import { SHOW_WEATHER_INFO } from '../actions/types';

export default function weatherInfoReducer(state = [], action) {
    switch (action.type) {
        case SHOW_WEATHER_INFO:
            let data = action.payload;
            let arrEmpty = [];
            data.forEach(el => {
               arrEmpty.push(
                   {
                       name: el.dt_txt,
                       temperature: Math.round(el.main.temp-273)
                   }
               );
            });
            return arrEmpty;
        default:
            return state;
    };
};