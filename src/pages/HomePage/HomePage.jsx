import "./HomePage.scss";
import Header from "../../Components/Header/Header.jsx"
import graphic from "../../assets/homepage-removebg-preview.png";
import { useState } from "react";
import adviceList from "../../data/advice.json"

export default function HomePage () {
    const [advice, setAdvice] = useState("")

    const displayAdvice = adviceList.map((item) => item.advice)

    const displyRandomAdvice = () => {
    const randomIndex = Math.floor(Math.random() * adviceList.length)
    const generateAdvice = displayAdvice[randomIndex]
    setAdvice(generateAdvice)
    // console.log(generateAdvice)
    return generateAdvice
    }

        return (
        <div className="home">
            <Header/>
            <div className="home__banner"> 
                <img className="home__graphic" src={graphic} alt="Logo"/>
            </div>
            <div className="home__advice">
                <h2 className="home__header">Here is something you should know ...</h2>
                <br></br>
                <p className="home__info">{advice}</p>                
            </div>
                <button className="home__generator" onClick={displyRandomAdvice}>Click me for advice!</button>
        </div>
    )
}

