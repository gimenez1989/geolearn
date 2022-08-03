import React, { useState, useEffect } from 'react';
import { helpHttp } from '../../helpers/helperHttp'
import { random } from '../../helpers/helpMethods';
import Loader from '../Loader';
import FinalPage from './FinalPage';
import Question from './Question';


const api = helpHttp();

const QuizzGame = ({ quizzOptions }) => {

    const [selectedCountrys, setselectedCountrys] = useState();
    const [question, setQuestion] = useState(null);
    const [points, setPoints] = useState(0);
    const [loading, setLoading] = useState(false);
    const [numberOfQuestions, setNumberOfQuestions] = useState(20);
    const [askedCountrys, setAskedCountrys] = useState([]);

    let countrysToAsk = selectedCountrys;
    let entry = true

    useEffect(() => {
        let url = "https://restcountries.com/v3.1/all";
        setLoading(true);
        api.get(url).then(res => {
            if (!res) return;
            let countrys = []
            res.map(country => {
                if (!country.capital) return;
                let information = {
                    continent: country.continents[0],
                    name: country.name.common,
                    capital: country.capital[0],
                    population: country.population,
                    flag: country.flags.png,
                    //mapLink: country.maps.googleMaps
                }
                countrys.push(information);
            })

            let filteredCountrys = []
            filteredCountrys = countrys.filter(country => quizzOptions.continentsList.indexOf(country.continent) !== -1);
            setselectedCountrys(filteredCountrys);

            countrysToAsk = filteredCountrys;
            if (entry) {
                entry = false;
                createQuestion();
            }
            setLoading(false);
        })
    }, [quizzOptions])

    countrysToAsk = selectedCountrys;

    const createQuestion = () => {
        if (!countrysToAsk) throw Error("There is no questions");

        setQuestion(null);
        let country = null
        console.log(askedCountrys);
        do {
            country = countrysToAsk[random(countrysToAsk.length)];
        } while (askedCountrys.indexOf(country) !== -1);

        let arr = askedCountrys;
        arr.push(country);
        setAskedCountrys(arr);

        setselectedCountrys(countrysToAsk.filter(c => c !== country))

        let flagsGame = (quizzOptions.gameTypeList[random(quizzOptions.gameTypeList.length)] == "Flags");

        let sentence = flagsGame ? "What country is this flag from?" :
            `Which is the capital of ${country.name}?`;

        let flag = country.flag

        let options = {
            A: flagsGame ? countrysToAsk[random(countrysToAsk.length)].name : countrysToAsk[random(countrysToAsk.length)].capital,
            B: flagsGame ? countrysToAsk[random(countrysToAsk.length)].name : countrysToAsk[random(countrysToAsk.length)].capital,
            C: flagsGame ? countrysToAsk[random(countrysToAsk.length)].name : countrysToAsk[random(countrysToAsk.length)].capital,
            D: flagsGame ? countrysToAsk[random(countrysToAsk.length)].name : countrysToAsk[random(countrysToAsk.length)].capital,
        }

        let opc = random(4);
        if (opc == 0) options.A = flagsGame ? country.name : country.capital;
        if (opc == 1) options.B = flagsGame ? country.name : country.capital;
        if (opc == 2) options.C = flagsGame ? country.name : country.capital;
        if (opc == 3) options.D = flagsGame ? country.name : country.capital;

        let letters = ["A", "B", "C", "D"];
        let solution = letters[opc];

        setQuestion({ sentence, options, flag, solution });
    }

    //This function upload the number of points and the number of questions
    const handleOption = (correct) => {
        if (correct) setPoints(points + 1);
        else setNumberOfQuestions(numberOfQuestions - 1);
    }

    if (loading) return <Loader />

    return (
        <div className='quizzGame'>
            {question && numberOfQuestions > 0 && <Question
                question={question.sentence}
                options={question.options}
                flag={question.flag}
                handleOption={handleOption}
                solution={question.solution}
                createQuestion={createQuestion} />}
            {numberOfQuestions == 0 && <FinalPage points={points} />}
        </div>
    )
}

export default QuizzGame