import { useState } from "react";

const randomNumber = () => {
    const number = ~~(Math.random() * 7);
    return number;
};

export const InputTask = ({ setTaskList }) => { 
    const [ Task, setTask ] = useState('');

    const Confirm = () => {
        if(Task === '') { return };
        const list = JSON.parse(localStorage.getItem('Tasks')) || [];
        list.push({
            label: Task,
            check: false,
            emoji: randomNumber(),
        });
        localStorage.setItem('Tasks', JSON.stringify([...list]));
        setTaskList([...list]);
        setTask('');    
    };

    const actions = {
        handleChange: (e) => {
            setTask(e.target.value);
        },
        handleKey: (e) => {
            e.key === 'Enter' && Confirm();
        }
    };
    
    return (
        <div className="input-task">
            <input type="text" placeholder="Adicionar..." value={Task} onChange={actions.handleChange} onKeyDown={actions.handleKey}/>
            <button type="button" onClick={Confirm}>
                <span className="material-symbols-outlined">
                    add_task
                </span>
            </button>
        </div>
    )
};