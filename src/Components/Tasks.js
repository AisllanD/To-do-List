import React from "react";
import Task from "./Task";

function Tasks({tasks, handleTaskClick,  handletaskDeletion, handletaskAll, handletaskCompleted, handletaskToDo}){
    return (
        <div >
            <div>
                {tasks.map((task) => <Task task={task} handleTaskClick ={handleTaskClick }  handletaskDeletion={ handletaskDeletion} handletaskAll={handletaskAll} handletaskCompleted={handletaskCompleted} handletaskToDo={handletaskToDo} />)}
            </div>

         

        </div>

        
    );
};

export default Tasks;