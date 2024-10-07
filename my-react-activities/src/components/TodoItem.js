import { Button, Card, ListGroup } from 'react-bootstrap'
import { useState } from 'react'

const TodoItem = (props) => {
    const { text, done, id, markAsDone } = props.item;

    return (
        <ListGroup.Item>

            {done ? (
                <li index={id} className='bg-success'>{text}</li>
            ) : (
                <li index={id}>{text}</li>
            )}
            <button onClick={()=>markAsDone(id)}>done</button>

        </ListGroup.Item>
    )
}

export default TodoItem