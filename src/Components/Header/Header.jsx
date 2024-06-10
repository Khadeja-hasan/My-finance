import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className="header">
        <h1 className="header__title"><Link className="header__link" to="/">MyFinance</Link></h1>
        <nav className="header__menu">
            <ul className="header__items">
                <Link className="header__nav" to="/tracker"><li className="header__item">Tracker</li></Link>
                <Link  to="/game" className="header__nav"><li className="header__item">Game</li></Link>
            </ul>
        </nav>
      
    </div>
  )
}
