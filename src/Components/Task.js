import React, {useState} from "react";
import {CgClose} from "react-icons/cg"
import {BiDetail} from "react-icons/bi"
import {useHistory} from 'react-router-dom'

import TaskDetails from './TaskDetails';

import './Task.css'

function Task({task, handleTaskClick,  handletaskDeletion,  handletaskToDo, handletaskCompleted, handletaskAll}){

    

    const[isModalVisible, setIsModalVisisble] = useState(false);

    return (

        <div className="task-container" style={task.completed ? {borderLeft: '6px solid green'}: {}} >

            
            <div className="task-title" onClick={() => handleTaskClick(task.id)} >
                {task.title}
            </div>
            
            <div className="buttons-container" >
               
                <button onClick={()=>setIsModalVisisble(true)} className="details-task-button" > <BiDetail/> </button>
                {isModalVisible ? (< TaskDetails onClose={ ()=> setIsModalVisisble(false)}/> ): null }

                <button className="remove-task-button" onClick={ ()=> handletaskDeletion(task.id)}>
                    <CgClose/>
                </button>

                
                
            </div>

           
        </div>
    )
}

export default Task;