import { useState } from "react";

const Statistic = ({text, value}) => {
    if(text === "positive") {
        return (
            <tr>
                <td>{text}</td>
                <td>{value}%</td>
            </tr>
        )
    }    
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )          
}

const Statistics = ({clicks}) => {
    const score = {
        good: 1,
        neutral: 0,
        bad: -1
    }
    const total = clicks.good + clicks.neutral + clicks.bad
    const average = ((clicks.good * score.good + clicks.neutral * score.neutral + clicks.bad * score.bad) / total).toFixed(2)
    const positive = clicks.good * (100 / total).toFixed(2)

    if(total === 0) {
        return (
            <div>
                <p>Vote by pressing any button</p>
            </div>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    < Statistic text="good" value={clicks.good}/>
                    < Statistic text="neutral" value={clicks.neutral}/>
                    < Statistic text="bad" value={clicks.bad}/>
                    < Statistic text="all" value={total}/>
                    < Statistic text="average" value={average}/>
                    < Statistic text="positive" value={positive}/>
                </tbody>
            </table>
        </div>
    )
}

const Button = ({handler, text}) => {
    return (
        <button onClick={handler}>{text}</button>
    )
}

const Header = ({text}) => <h2>{text}</h2>



const App = () => {
    const [clicks, setClicks] = useState({
        good: 0,
        neutral: 0,
        bad: 0 
    })

    const handleGoodClick = () => {
        setClicks({...clicks, good: clicks.good + 1})
    }
    
    const handleNeutralClick = () => {
        setClicks({...clicks, neutral: clicks.neutral + 1})  
    }

    const handleBadClick = () => {
        setClicks({...clicks, bad: clicks.bad + 1})  
    }

    

    return (
        <>
            <Header text={"give a feedback"}></Header>
            <Button handler={handleGoodClick} text={"good"}/>
            <Button handler={handleNeutralClick} text={"neutral"}/>
            <Button handler={handleBadClick} text={"bad"}/>
            <Header text={"statistics"}></Header>
            <Statistics clicks={clicks}/>
        </>
    )
}

export default App 