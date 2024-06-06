import "./Tracker.scss";
import bank from "../../assets/piccy.jpeg"

import { useState, useRef } from "react";

export default function Tracker () {
const [sum, setSum] = useState (0);
const [item, setItem] = useState("myself")
const [total, setTotal] = useState("100")

const trackerRef = useRef();

    const handleAdd = (e) => {
        e.preventDefault();
        const newValue = parseFloat(trackerRef.current.valueChange.value)
        setSum(prevSum => prevSum + newValue)
        console.log(newValue)
        
        // assign a variable that will hold the value provided in the add/spend field
        // use that value then, to update the sum
        // reset the field once the amount has been submitted.
    }

    const handleSubtract = (e) => {
        e.preventDefault();
        const newValue = parseFloat(trackerRef.current.valueChange.value)
        setSum(prevSum => prevSum - newValue)
    }

    const handleReset = (e) => {
        setSum(0)
    }

    

    


    return (
        <div className="tracker">
            <div className="tracker__goals">
                <form className="tracker__info">
                    <label className="tracker__title" htmlFor="trackGoal">Saving for</label>
                    <input className="tracker__item" id="trackGoal" placeholder="I'm saving up for ..." />
                    <br></br>
                    <label className="tracker__title" htmlForfor="trackAmount">Saving goal</label>
                    <input className="tracker__amount" id="trackAmount" placeholder="This is how much I need to save up ..."/>
                </form>
                <h2 className="tracker__savingFor">I am saving for {item}</h2>
                <h2 className="tracker__target">I will need {total} for that</h2>
            </div>
            <h2 className="tracker__sum">You have ${sum} saved up!</h2>
            <img className="tracker__logo" src={bank} alt="bank" />
            <form ref={trackerRef} type="number">
            <input className="tracker__amount" id="valueChange" placeholder="Input amount" type="number" step='0.01' pattern='^\d+(\.\d{1,2})?$' />
            <button className="tracker__add" id="increaseValue" onClick={handleAdd}>Save</button>
            <button className="tracker__subtract" id="decreaseValue" onClick={handleSubtract}>Spend</button>    
            <br></br>
            <button className="tracker__reset" id="resetValue" onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}