import React from "react";
import CountryInfo from "./CountryInfo";

const ContinentOptions = ({ countryList }) => {
    return (
        <div className='countryList'>
            {countryList.map((el, i) => <CountryInfo key={i} info={el} />)}
        </div>
    )
}

export default ContinentOptions