import "./Tracker.scss";

import Header from "../../Components/Header/Header.jsx"
import kitty from "../../assets/sticker.png";
import Goal from "../../assets/FinishLine.png";
import Next from "../../assets/GoNext.png";

import { useAnimate } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tracker () {
const [sum, setSum] = useState (0);
const [item, setItem] = useState("myself");
const [total, setTotal] = useState(0);

const [scope, animate] = useAnimate()

const trackerRef = useRef();
const infoRef = useRef();

    const handleAdd = (e) => {
        e.preventDefault();
        const newValue = parseFloat(trackerRef.current.valueChange.value)
        setSum(prevSum => prevSum + newValue) 
    }

    const handleSubtract = (e) => {
        e.preventDefault();
        const newValue = parseFloat(trackerRef.current.valueChange.value)
        setSum(prevSum => prevSum - newValue)
    }

    const handleReset = (e) => {
        setSum(0)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(infoRef.current.trackGoal.value);
        setTotal(infoRef.current.trackAmount.value);
    }

    const handleFormReset = (e) => {
        setItem("")
        setTotal("")
    }

        const calculateProgress = (sum/total) * 100
        const percent = (Math.min(100, Math.max(calculateProgress, 0)))
        console.log(calculateProgress)

    useEffect (() => {
        const progress = (percent + "%");
        animate("#progressTracker", {x: progress})
    }, [percent])
    

    return (
        <div className="tracker">
        <Header/>
            <div className="tracker__goals">
                <form className="tracker__info" ref={infoRef}>
                    <label className="tracker__title" htmlFor="trackGoal">Saving for</label>
                    <input className="tracker__feedback" id="trackGoal" placeholder="I'm saving up for ..." />
                    <br></br>
                    <label className="tracker__title" htmlFor="trackAmount">Saving goal</label>
                    <input className="tracker__feedback" id="trackAmount" placeholder="I need to save ..."/>
                    <br></br>
                    <button className="tracker__submit" id="inputTotal" onClick={handleSubmit}>Let's get started!</button>
                    <button className="tracker__formReset" id="resetForm" onClick={handleFormReset}>Let's do it again!</button>
                </form>
                <h2 className="tracker__savingFor">I am saving for <span className="tracker__details">{item}</span></h2>
                <h2 className="tracker__target">I will need <span className="tracker__details">{total}</span> for that</h2>
            </div>
            <h2 className="tracker__sum">My savings: <span className="tracker__details">${sum.toFixed(2)}</span></h2>
            <h2 className="tracker__percent">I have saved <span className="tracker__details">{percent.toFixed()}%</span> of my goal saved</h2>
            <div className="tracker__progress" ref={scope}>
                <div className="tracker__indicator" style={{width:`${percent}%`}}>
                    <img className="tracker__logo" id="progressTracker" src={kitty} alt="bank" />
                </div>
                <img className="tracker__end" src={Goal} alt="theEnd"/>
            </div>
            <form ref={trackerRef} >
            <input className="tracker__feedback tracker__feedback--standalone" id="valueChange" placeholder="Input amount" type="number" step='0.01' pattern='^\d+(\.\d{1,2})?$' />
            <br></br>
            <button className="tracker__add" id="increaseValue" onClick={handleAdd}>Save</button>
            <button className="tracker__subtract" id="decreaseValue" onClick={handleSubtract}>Spend</button>    
            <br></br>
            <button className="tracker__reset" id="resetValue" onClick={handleReset}>Reset</button>
            </form>
            <footer className="tracker__next">
                <Link to="/game" className="tracker__button"><img src={Next} className="tracker__go"/></Link>
            </footer>
            
        </div>
    )
}