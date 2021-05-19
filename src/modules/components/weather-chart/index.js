import React from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.scss';

const mapStateToProps = state => {
  return {
      state
  };
};

const WeatherChart = (props) => {
    const info = props.state.weatherInfoReducer;

    return (
        <>
            { info.length ?
                <div className="weather-chart-wrap">
                    <ResponsiveContainer width={800} height={650}>
                        <BarChart
                            width={500}
                            height={300}
                            data={info}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="temperature" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                : ''
            }
        </>
    );
};

export default connect(mapStateToProps, null)(WeatherChart);