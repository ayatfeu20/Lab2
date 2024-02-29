import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from '../Images/weather.jpg';

const WeatherCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-image: url(${img});
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 140px;
  padding-left: 140px;
`;

const WeatherHeading = styled.h2`
  margin-top: 0;
  font-size: 1 rem;
  color: #f1c232;
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
`;

const WeatherIcon = styled.div``;

const WeatherIconImage = styled.img`
  width: 60px;
`;

const WeatherDetails = styled.div`
  margin-left: 20px;
`;

const Temperature = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #f1c232;
  margin: 0;
`;

const Condition = styled.p`
  font-size: 1rem;
  color: #f1c232;
  margin: 5px 0 0;
`;

const Loading = styled.p`
  font-size: 1rem;
  color: #f1c232;
`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=5455419f6795487921851c80aa60b4bf&units=metric',
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <WeatherCard>
      <WeatherHeading>Weather stockholm</WeatherHeading>

      {weatherData ? (
        <WeatherInfo>
          <WeatherIcon>
            <WeatherIconImage
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </WeatherIcon>
          <WeatherDetails>
            <Temperature>{Math.round(weatherData.main.temp)}°C</Temperature>
            <Condition>{weatherData.weather[0].description}</Condition>
          </WeatherDetails>
        </WeatherInfo>
      ) : (
        <Loading>Loading weather...</Loading>
      )}
    </WeatherCard>
  );
};

export default Weather;
