import React from "react";
import './countryInfo.css'

const CountryInfo = ({ info }) => {
    return (
        <div className="country" style={{backgroundImage: `url(${info.flag})`}}>
            <div className="countryInformation">
                <h3 className="countryName">{info.name}</h3>
                <h4 className="countryCapital">{info.capital}</h4>
                <a href={info.mapLink} target="_blank"><img src="http://localhost:3000/images/mapa.png" alt={info.name}/></a>
            </div>
        </div>
    )
}

export default CountryInfo