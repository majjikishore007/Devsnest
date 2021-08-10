import React from "react";
import "../App.css";

import { useSelector } from "react-redux";
const WeatherCard = () => {
  const placeData = useSelector((state) => state.placeData);
  const theme = useSelector((state) => state.theme);

  // console.log("hi",placeData)
  return (
    <div className='container2'>
      <div className='row'>
        <div className=' offset-md-4 col-4 offset-md-4 card'>
          {placeData.location ? (
            <div className={theme ? "row" : "row dark"}>
              <div className='col-md-6'>
                <div className='place'>{placeData.location.name}</div>
                <p style={{ marginTop: "-2px", fontSize: "15px" }}>
                  {placeData.location.localtime}
                </p>
                <img
                  style={{ marginTop: "-2px", width: "100px", height: "100px" }}
                  src={placeData.current.condition.icon}
                  alt=''
                />
                <div className='desc' style={{ paddingBottom: "20px" }}>
                  {placeData.current.condition.text}
                </div>
              </div>
              <div className='col-md-6' style={{ marginTop: "30px" }}>
                <div
                  className='temp'
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {placeData.current.temp_c}°C
                </div>
                <div>
                  <span>
                    {placeData.forecast.forecastday[0].day.maxtemp_c}°C/
                  </span>
                  <span>
                    {placeData.forecast.forecastday[0].day.mintemp_c}°C
                  </span>
                </div>
              </div>
              <div className='container'>
                <p style={{ fontSize: "20px" }}>
                  <span>Humidity: {placeData.current.humidity}%</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Wind speed: {placeData.current.wind_kph}kmph</span>
                </p>
                <div
                  className='row whp'
                  style={{ paddingTop: "10px", borderTop: "1px solid black" }}
                >
                  <div className='col'>
                    <p style={{ marginTop: "-2px", fontSize: "18px" }}>1AM</p>
                    <img
                      className='time_img'
                      src={
                        placeData.forecast.forecastday[0].hour[1].condition.icon
                      }
                      alt=''
                    />
                    <p style={{ marginTop: "-5px" }}>
                      {placeData.forecast.forecastday[0].hour[1].temp_c}°C
                    </p>
                  </div>
                  <div className='col'>
                    <p style={{ marginTop: "-2px", fontSize: "18px" }}>6AM</p>
                    <img
                      className='time_img'
                      src={
                        placeData.forecast.forecastday[0].hour[6].condition.icon
                      }
                      alt=''
                    />
                    <p style={{ marginTop: "-5px" }}>
                      {placeData.forecast.forecastday[0].hour[6].temp_c}°C
                    </p>
                  </div>
                  <div className='col'>
                    <p style={{ marginTop: "-2px", fontSize: "18px" }}>11AM</p>
                    <img
                      className='time_img'
                      src={
                        placeData.forecast.forecastday[0].hour[11].condition
                          .icon
                      }
                      alt=''
                    />
                    <p style={{ marginTop: "-5px" }}>
                      {placeData.forecast.forecastday[0].hour[11].temp_c}°C
                    </p>
                  </div>
                  <div className='col'>
                    <p style={{ marginTop: "-2px", fontSize: "18px" }}>16AM</p>
                    <img
                      className='time_img'
                      src={
                        placeData.forecast.forecastday[0].hour[16].condition
                          .icon
                      }
                      alt=''
                    />
                    <p style={{ marginTop: "-5px" }}>
                      {placeData.forecast.forecastday[0].hour[16].temp_c}°C
                    </p>
                  </div>
                  <div className='col'>
                    <p style={{ marginTop: "-2px", fontSize: "18px" }}>21AM</p>
                    <img
                      className='time_img'
                      src={
                        placeData.forecast.forecastday[0].hour[21].condition
                          .icon
                      }
                      alt=''
                    />
                    <p style={{ marginTop: "-5px" }}>
                      {placeData.forecast.forecastday[0].hour[21].temp_c}°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h2>Place not found</h2>
          )}
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
