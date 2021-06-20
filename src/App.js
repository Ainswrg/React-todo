import { useEffect, useReducer, useState } from "react";
import Flex from "./components/Flex";
import Todo from "./components/Todo";
import { StyledApp } from "./shared/Styles";
import Input from './components/Input';
import reducer, { addTask } from './components/reducer';
import { Context } from "./components/Context";


function App(props) {
   const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')) || []);
   const [todoTitle, setTodoTitle] = useState('');

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(state));
   }, [state])

   const addTodo = (event) => {
      if(event.charCode === 13) {
         dispatch(addTask(todoTitle));
         setTodoTitle('');
      }
   };

   return (
      <Context.Provider value={{
         dispatch
      }}>
         <StyledApp {...props}>
            <h1> ToDo App </h1>
            <Flex justify={"center"} align="center" direction="column">
               <Input 
                  onKeyPress={addTodo} 
                  type="text" 
                  value={todoTitle} 
                  onChange={e => setTodoTitle(e.target.value)}
               />
               <Flex justify="center">
               <Todo todos={state}/>
            </Flex>
      </Flex>
         </StyledApp>
      </Context.Provider>
   );
}

export default App;
