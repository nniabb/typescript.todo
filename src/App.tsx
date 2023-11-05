import React from 'react';
import { useState } from 'react';
import './App.css';
import { Container } from './components/styles/Container.styled';
import { Input } from './components/styles/Input.styled';
import { Box } from './components/styles/Returneddiv.styled';
import { Checkbox } from './components/styles/Returneddiv.styled';
import { TodoText } from './components/styles/Returneddiv.styled';
import { DateBox } from './components/styles/Returneddiv.styled';
import { DeleteBtn } from './components/styles/Returneddiv.styled';
import { Leftside } from './components/styles/Returneddiv.styled';
import { Rightside } from './components/styles/Returneddiv.styled';




function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState<Array<{ id: string; title: string; completed: boolean; }>>([]);
 
  
  
  function handleChange(e: React.SyntheticEvent) {
    if(newItem === "") return;
    e.preventDefault()
  
    setTodos(currentTodos => {
      return [
        { id: crypto.randomUUID(), title: newItem, completed: false, },
        ...currentTodos
      ]
    })
    setNewItem('')
  }
  
  function toggleTodo(id:string, completed:boolean){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return{...todo, completed,}
        }
        return todo
      })
    })
  }
  
  function deleteItems (id: string) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
    return (
      <div className="App">
        <form onSubmit={handleChange}>
        <Container>
          <Input type='text'
           placeholder='Create new task'
           value={newItem}
           onChange={e => setNewItem(e.target.value)}/>
           {todos.map((todo, index)=> {
            return <Box key={todo.id}>
              <Leftside>
            <Checkbox type='checkbox' checked={todo.completed}
            onChange={e=> toggleTodo(todo.id, e.target.checked)}/>
            <TodoText style={todo.completed ? { textDecoration: "line-through" } : {}}>{todo.title}</TodoText>
              </Leftside>
            <Rightside>
            <DateBox></DateBox>
            <DeleteBtn onClick={() => deleteItems(todo.id)}/>
            </Rightside>
          </Box> 
           })}
        </Container>
        </form>
      </div>
    );
  }
  
  
  export default App;
  



