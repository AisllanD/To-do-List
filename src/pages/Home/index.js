import React, {useContext,  useState} from 'react';
import {v4 as uuidv4} from 'uuid'



import Tasks from '../../Components/Tasks';
import Modal from '../../Components/Modal';
import TaskDetails from '../../Components/TaskDetails';

import './home.css'

import { AuthContext } from '../../contexts/auth';

function Home(){

    const[isModalVisible, setIsModalVisisble] = useState(false);
    const {logout} = useContext(AuthContext);
    

    const [tasks, setTasks] = useState([{
        id:"1",
        title: "estudar",
        completed: false,
    },
    {
        id:"2",
        title: "treinar",
        completed: true,
    }
]);



    const handleTaskAddition = (taskTitle) =>{
        const newtasks = [...tasks, {
            title: taskTitle,
            id: uuidv4(),
            completed: false,
        }];
        setTasks(newtasks);
    };


    const handletaskDeletion = (taskId ) => {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasks(newTasks);
    }

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId){
                return {...task, completed: !task.completed};
            }
            return task; 
            
        });

        setTasks(newTasks);
    }


    const handletaskAll = (tasks) => {
        const newTasks = tasks;
        console.log(newTasks);
        setTasks(newTasks);
        };

        

    const handletaskCompleted = (tasks) => {
        const newTasks = tasks.filter((task) => {
            if(task.completed === true) {
                return task;
            }
        
            
        });

        console.log(newTasks);
        setTasks(newTasks)
    }

    const handletaskToDo = (tasks) => {
        const newTasks = tasks.filter((task) => {
            if(task.completed === false) {
                return task
            }
            
            
        });

        console.log(newTasks);
        setTasks(newTasks)
        
    }

    const handleLogout = () =>{
        logout();
    };

    return(
        <div>
           <div className='home-container'>
            
           <div className="filter">
                <h1>Filtrar</h1> 

                <div className="buttons-container">
                    <button className="buttomFilter" onClick={() => handletaskAll(tasks)}>Tudos</button>
                    <button className="buttomFilter" onClick={() => handletaskToDo(tasks)}>A fazer</button>
                    <button className="buttomFilter" onClick={()=> handletaskCompleted(tasks)}>Completos</button>
                </div>

            </div>
            
            <Tasks tasks={tasks} handleTaskClick ={handleTaskClick }  handletaskDeletion={ handletaskDeletion}  handletaskAll={handletaskAll} handletaskCompleted={handletaskCompleted} handletaskToDo={handletaskToDo} />

            <div className='buttons-home'>
                <button onClick={()=>setIsModalVisisble(true)} className="button-add" >adcionar</button>
                {isModalVisible ? (< Modal onClose={ ()=> setIsModalVisisble(false)} handleTaskAddition={handleTaskAddition}/> ): null }

                <button onClick={handleLogout} className="button-logout" >Logout</button>
            </div>

            
           </div>
            
            
        </div>
    )
}

export default Home;