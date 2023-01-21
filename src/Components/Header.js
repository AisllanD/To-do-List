import React from "react"
import './Header.css'

function Header(){

    

    return(
        <div className="filter">
           <h1>Filtrar</h1> 

            <div className="buttons-container">
                <button className="buttomFilter">Tudos</button>
                <button className="buttomFilter">A fazer</button>
                <button className="buttomFilter">Completos</button>
            </div>

        </div>
    )
}

export default Header;