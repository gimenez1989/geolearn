import React, { useState } from 'react'
import ContinentOptions from './ContinentOptions'
import './continents.css'

const MenuContinentOption = ({ continentName, continentData }) => {

    const [selected, setSelected] = useState(false)

    const getUrl = () => {
        switch (continentName.toUpperCase()) {
            case 'EUROPE': return 'http://localhost:3000/images/europa.jpg'
            case 'ASIA': return 'http://localhost:3000/images/asia.jpg'
            case 'AFRICA': return 'http://localhost:3000/images/Africa.jpg'
            case 'NORTH AMERICA': return 'http://localhost:3000/images/north_america.jpg'
            case 'SOUTH AMERICA': return 'http://localhost:3000/images/south_america.jpg'
            case 'OCEANIA': return 'http://localhost:3000/images/oceania.jpg' 
            case 'ANTARTICA': return 'http://localhost:3000/images/antartica.jpg'
        }
    }

    return (
        <div className='continentOption'>
            <div className='continentSelector'
                style={{backgroundImage: `url(${getUrl()})`}}
                onClick={() => setSelected(!selected)}>
                <h2>{continentName.toUpperCase() + ` (${continentData.length})`}
                <img src="http://localhost:3000/images/flecha.png" alt="Select" width="20" height="20"/>
                </h2>
            </div>
            {selected && <ContinentOptions countryList={continentData} />}
        </div>
    )
}

export default MenuContinentOption