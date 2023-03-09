import React from 'react';
import descriptions from './descriptions.css';

const Descriptions = ({weather, units}) => {

    const tempUnit = units === 'metric'? '°C' : '°F';
    const windUnit = units === 'metric'? 'm/s' : 'm/h';

    const cards = [
        {
            id:1,
            title:"min",
            data: weather.temp_min.toFixed(),
            units: tempUnit,
        },
        {
            id:2,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id:3,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id:4,
            title: "pressure",
            data: weather.pressure,
            unit: "hpa",
        },
        {
            id:5,
            title: "humidity",
            data: weather.humidity,
            unit: "%",
        },
        {
            id:6,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
    ];


  return (
    <div className='section section__descriptions'>
        {cards.map(({id, title, data, unit}) =>(
            <div key={id} className='card'>
                <div className='description__card-icon'>
                    <p>{title}</p>
                </div>
                <h2>{`${data} ${unit}`}</h2>
            </div>
        ))}
    </div>
  );
};

export default Descriptions
