import { useState } from "react";

export const ListItem = ({ label, check, id, setTaskList, emoji }) => {
    const taskCheck = {
        label: label,
        check: !check,
        emoji: emoji,
    };

    const [ classCSS, setClassCSS ] = useState('list-item');

    const checkList = () => {
        const list = JSON.parse(localStorage.getItem('Tasks')) || [];
        list.splice(id, 1, taskCheck);
        localStorage.setItem('Tasks', JSON.stringify([...list]));
        setTaskList([...list]);
    };

    const deleteTask = () => {
        setClassCSS('list-item snap');
        const list = JSON.parse(localStorage.getItem('Tasks')) || [];
        list.splice(id, 1);
        localStorage.setItem('Tasks', JSON.stringify([...list]));
        setTimeout(() => {
            setClassCSS('list-item');
            setTaskList([...list]);
        }, [700]);
    };

    const emojis = ['😀', '👍🏽', '🙂', '✨', '😉', '🔮', '🎫'];

    return (
        <li className={classCSS}>
            <div className="checkbox" onClick={checkList}>
                <div className="box">
                    {(check) && <span className="material-symbols-outlined">done</span>}
                </div>
            </div>
            <div className="text">
                <span>{emojis[emoji]}</span>
                <p>{label}</p>
            </div>
            <div className="remove" onClick={deleteTask}>
                <span className="material-symbols-outlined">
                    close
                </span>
            </div>
        </li>
    );
};