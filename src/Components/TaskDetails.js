import React from "react";
import Button from './Button'
import { useParams } from "react-router-dom";

function TaskDetails({id="modal", onClose= () => {}}){

    const params = useParams();
    
    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    
    return(
        <>
            <div id={id} className="container-details" onClick={handleOutsideClick}>
                
                <div className="task-details">
                    <h2>{params.taskTitle}</h2>
                    <Button onClick={onClose}>voltar</Button>
                </div>

                
            </div>
            
        </>
    )
}

export default TaskDetails;
