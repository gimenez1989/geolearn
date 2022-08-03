import React, { useState, useEffect } from 'react'
import { helpHttp } from '../../helpers/helperHttp'
import MenuContinentOption from './MenuContinentOption'
import Loader from '../Loader'

const api = helpHttp()

const StudyMainMenu = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        let url = "https://restcountries.com/v3.1/all";
        api.get(url).then(res => {
            if (!res) return
            setLoading(true)
            let countrys = []
            res.map(country => {
                if(!country.capital)return;
                let information = {
                    continent: country.continents[0],
                    name: country.name.common,
                    capital: country.capital[0],
                    population: country.population,
                    flag: country.flags.png,
                    mapLink: country.maps.googleMaps
                }
                countrys.push(information);
            })
            setData(countrys)
            setLoading(false)
        })
    }, [])

    let europe = [],
        asia = [],
        africa = [],
        north_america = [],
        south_america = [],
        oceania = [],
        antartica = []

   if(data){
        europe = data.filter(country => country.continent==="Europe").sort((a,b) => b.population - a.population);
        asia = data.filter(country => country.continent==="Asia").sort((a,b) => b.population - a.population);
        africa = data.filter(country => country.continent==="Africa").sort((a,b) => b.population - a.population);
        north_america = data.filter(country => country.continent==="North America").sort((a,b) => b.population - a.population);
        south_america = data.filter(country => country.continent==="South America").sort((a,b) => b.population - a.population);
        oceania = data.filter(country => country.continent==="Oceania").sort((a,b) => b.population - a.population);
        antartica = data.filter(country => country.continent==="Antarctica").sort((a,b) => b.population - a.population);
    } else {
        return <Loader />
    }

    return (
        <div>
            <MenuContinentOption
                continentName='Europe'
                continentData={europe}
            />
            <MenuContinentOption 
                continentName='Asia'
                continentData={asia}
            />
            <MenuContinentOption 
                continentName='Africa'
                continentData={africa}
            />
            <MenuContinentOption 
                continentName='North America'
                continentData={north_america}
            />
            <MenuContinentOption 
                continentName='South America'
                continentData={south_america}
            />
            <MenuContinentOption 
                continentName='Oceania'
                continentData={oceania}
            />
            <MenuContinentOption 
                continentName='Antartica'
                continentData={antartica}
            />
        </div>
    )
}

export default StudyMainMenu