import React, {useState} from "react";
import Button from "./Button";
import './AddTask.css'

function AddTask({handleTaskAddition}){

    const[inputData, setInputData] = useState('');

    const handleinputChange = (e) =>{
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("")
    };

    return(
        <div className="AddTask-container">
            <h4>Criar nova tarefa</h4>

           
            <input className="input-AddTask" onChange={handleinputChange} value={inputData} type="text" placeholder='Decrição'/>
            <Button onClick={handleAddTaskClick} className="buttom-criar" > Criar </Button>
            
            
        </div>
    )
}

export default AddTask;