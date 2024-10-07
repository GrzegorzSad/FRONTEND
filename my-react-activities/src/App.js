import LoginForm from "./components/LoginForm";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const App = () => {
    return (
        //<LoginForm/>
        //<Todo/>


        <Container className='mt-5'>
            <TodoList/>
        </Container>

    )
}

export default App;