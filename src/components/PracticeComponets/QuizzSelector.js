import React from 'react'
import "./quizzSelector.css"

const QuizzSelector = ({ handleQuizzOptions }) => {

    let continentsList = []
    let gameTypeList = []

    const handleContinents = (e) => {
        if (e.target.checked) {
            continentsList.push(e.target.name);
        }
        else {
            continentsList = continentsList.filter(el => el !== e.target.name);
        }
    }

    const handleGameType = (e) => {
        if (e.target.checked) {
            gameTypeList.push(e.target.name);
        }
        else {
            gameTypeList = gameTypeList.filter(el => el !== e.target.name);
        }
    }

    return (
        <div className='quizzSelector'>
            <h2 className='selectorTitle'>Choose your game:</h2>
            <div className='continentQuizzSelector'>
                <h3>SELECT THE CONTINENTS:</h3>
                <label htmlFor="europe">
                    <input type="checkbox" name="Europe" id='europe' onChange={handleContinents} />
                    Europe
                </label>
                <label htmlFor="africa">
                    <input type="checkbox" name="Africa" id="africa" onChange={handleContinents} />
                    Africa
                </label>
                <label htmlFor="asia">
                    <input type="checkbox" name="Asia" id="asia" onChange={handleContinents} />
                    Asia
                </label>
                <label htmlFor="north_america">
                    <input type="checkbox" name="North America" id="north_america" onChange={handleContinents} />
                    North America
                </label>
                <label htmlFor="south_america">
                    <input type="checkbox" name="South America" id="south_america" onChange={handleContinents} />
                    South America
                </label>
                <label htmlFor="oceania">
                    <input type="checkbox" name="Ocenia" id='oceania' onChange={handleContinents} />
                    Oceania
                </label>
                <label htmlFor="antartica">
                    <input type="checkbox" name="Antartica" id='antartica' onChange={handleContinents} />
                    Antartica
                </label>
            </div>
            <div className='gameTypeQuizzSelector'>
                <h3>SELECT THE GAME:</h3>
                <label htmlFor="capitals">
                    <input type="checkbox" name="Capitals" id='capitals' onChange={handleGameType} />
                    Capitals
                </label>
                <label htmlFor="flags">
                    <input type="checkbox" name="Flags" id='flags' onChange={handleGameType} />
                    Flags
                </label>
            </div>

            <button
                onClick={() => handleQuizzOptions({ continentsList, gameTypeList })}
                className="selectorBtn"
            >Start</button>

        </div>
    )
}

export default QuizzSelector