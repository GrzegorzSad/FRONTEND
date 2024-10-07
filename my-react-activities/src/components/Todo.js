import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

//my attempt not following class

const Todo = () => {
    const [list, setList] = useState([
        {
            task: 'clean',
            completed: true
        }
    ]);

    const [taskName, setTaskName] = useState('');

    const handleCheck = (index) => {
        setList(prevList =>
            prevList.map((entry, idx) =>
                idx === index ? { ...entry, completed: !entry.completed } : entry
            )
        );
    };

    const listTasks = list.map((entry, index) => {
        return (
            <li key={index}>
                {entry.task}
                <input
                    name='completed'
                    type="checkbox"
                    checked={entry.completed}
                    onChange={() => handleCheck(index)}
                />
            </li>
        );
    });

    const handleAdd = (event) => {
        event.preventDefault();

        const newTask = {
            task: taskName,
            completed: false,
        };

        setList(prevList => [...prevList, newTask]);
        setTaskName('');
    };

    const handleChangeTaskName = (e) => {
        setTaskName(e.target.value);
    };

    return (
        <>
            <form onSubmit={handleAdd}>
                <div>
                    <label>
                        Task:
                        <input
                            name='task'
                            type="text"
                            value={taskName}
                            onChange={handleChangeTaskName}
                        />
                    </label>
                </div>
                <button type="submit">Add</button>
            </form>
            <ul>
                {listTasks}
            </ul>
        </>
    );
};

export default Todo;