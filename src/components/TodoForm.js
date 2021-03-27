import React , {useState} from 'react'
import {
  Form,
  Button,
  Input,
  InputGroupAddon,
  Container,
  InputGroup,
  FormGroup,
} from 'reactstrap'
import {v4} from 'uuid'

const TodoForm = ({addTodos}) => {
  const [todoString,setTodoString]= useState('');
const handleSubmit = e => {
   e.preventDefault();
   if(todoString === ''){
     return alert('please add todos')
   }
   const todo = {
     todoString,
     id:v4
   }
   addTodos(todo)
   setTodoString('')
}



  return(
    <Form onSubmit={handleSubmit}>
    <FormGroup>
    <InputGroup>
    <Input 
   type='text'
   name='todo'
   id='todo'
   value={todoString}
   onChange={e => setTodoString(e.target.value)}
    />
    <InputGroupAddon addonType='prepend'>
    <Button color='success'>ADD</Button>
    </InputGroupAddon>
    </InputGroup>
    </FormGroup>
    </Form>
  )
}
export default TodoForm