import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const StyledTodo = styled.div``;

const Todo = ({ todos }) => {
   return (
      <StyledTodo>
         {todos && todos.map((item) => (
            <TodoItem key={item.id} {...item} />
         ))}
      </StyledTodo>
   );
};

export default Todo;
