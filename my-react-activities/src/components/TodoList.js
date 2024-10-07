import { Button, Card, ListGroup } from 'react-bootstrap'
import { useState } from 'react'

const TodoItem = (props) => {
    const { text, done, id} = props.item;

    return (
        <ListGroup.Item>

            {done ? (
                <li index={id} className='bg-success'>{text}</li>
            ) : (
                <li index={id}>{text}</li>
            )}
            <button onClick={()=>props.markAsDone(id)}>done</button>

        </ListGroup.Item>
    )
}

const initialValue = [
    {
        'text': 'orang',
        done: false,
        id: 0
    },
    {
        'text': 'apple',
        done: true,
        id: 1
    }, {
        'text': 'car',
        done: false,
        id: 2
    }, {
        'text': 'bike',
        done: false,
        id: 3
    }, {
        'text': 'george',
        done: false,
        id: 4
    },
]

const TodoList = () => {

    const markAsDone = (id) => {
        console.log('clicked')
        const newList = list.map((item) => {
            if (item.id === id) {
                return { ...item, done: true }
            }
            return item
        });
        setList(newList)
    };

    const [list, setList] = useState(initialValue)

    const todoItems = list.map((item, index) => {
        return <TodoItem item={item} markAsDone={markAsDone}/>
    })

    return (
        <>
            <Card className=''>
                <Card.Header>TodoList</Card.Header>
                <Card.Body>
                    <ListGroup variant='flush'>
                        {todoItems}
                    </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <Button variant='primary' className='float-end'>Add</Button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default TodoList