import React from "react";
import AddTask from "./AddTask";

const Modal = ({id="modal", onClose= () => {}, handleTaskAddition}) =>{

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return (
      <div id={id} className="modal" onClick={handleOutsideClick}>

            <div className="container">

                <AddTask handleTaskAddition={handleTaskAddition}/> 
                <button onClick={onClose} className="button-exit">cancelar</button>   

            </div>
        
        </div>
    )
};

export default Modal