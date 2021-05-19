import React from 'react';
import { Header } from './header/header.js';
import SearchCity  from './search-city/index.js';
import WeatherChart from './weather-chart/index.js';
import './App.scss';

const WeatherPage = () => {
    return (
        <>
            <Header />
            <div className="weather-page">
                <SearchCity />
                <WeatherChart />
            </div>
        </>
    );
};

export default WeatherPage;