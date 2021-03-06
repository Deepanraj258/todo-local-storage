import React from 'react'
import {ListGroup , ListGroupItem} from 'reactstrap'
import {FaCheckDouble} from 'react-icons/fa'

const Todos = ({todos,markComplete}) => {
  return (
    <ListGroup className='mt-5 mb-3'>
    {todos.map(todo =>(
      <ListGroupItem key = {todo.id}>
      {todo.todoString}
      <span
      onClick={()=> markComplete(todo.id)}
      ><FaCheckDouble /></span>
      </ListGroupItem>
    ))}    
    </ListGroup>


  )
}
export default Todos