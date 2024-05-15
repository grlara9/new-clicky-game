import React from 'react'
import style from './header.module.css'
function Header(props){
    return(
        <div className={style.header}>
            <div className="header_title">
                <h1>Clicky Game</h1>
            </div>

            <div className={style.header_scores}>
                 <p className={style.font}>Scores: <strong>{props.score}</strong></p>
                 <p className={style.font}>Highscore: <strong>{props.highscore}</strong></p>
            </div>
           
        </div>
    )
}
export default Header;