import React, { useState, useEffect } from "react";
import "./progressBar.css"

const ProgressBar = ({ handleAnswer }) => {
    const [seconds, setSeconds] = useState(20)

    useEffect(() => {
        const myInterval = setInterval(() => {
            setSeconds(seconds => seconds - 0.2)
        }, 200)
        const stopTimer = setTimeout(() => {
            clearInterval(myInterval)
            handleAnswer("")
        }, 20000)

        return () => {
            clearInterval(myInterval)
            clearTimeout(stopTimer)
        }
    }, [])

    return (
        <div>
            <progress max="20" value={seconds}></progress>
        </div>
    )
}

export default ProgressBar