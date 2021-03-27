import React , {useState , useEffect} from 'react';
import {Container} from 'reactstrap'
import './style.css'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

const App = () => {
  const[todos,setTodos] = useState([])

  useEffect(()=>{
    const localTodos=localStorage.getItem('todos')
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  },[])

  const addTodos= async todo => {
    setTodos([...todos,todo])
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const markComplete = id => {
    setTodos(todos.filter(todo=>todo.id !== id))
  }
  return( 
     <Container fluid>
     <h2>Todo using Local storage and Effect Hook</h2>
     <TodoForm addTodos={addTodos}/>
     <Todos todos={todos} markComplete={markComplete}/>
     </Container>
  )
}
export default App
