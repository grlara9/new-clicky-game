import React from 'react'
import style from './game.module.css'

function Game(props){
    return(
        <div onClick={() => props.handleClick(props.id)}>
            <div >
                <div className="img-game">
                    <div></div>
                    { <img alt={props.alt} src={props.src} /> }
                </div>
            </div>
        </div>
    )
}

export default Game