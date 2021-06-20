import React, { useContext } from "react";
import { Context } from "./Context";
import { Li, Label, Span, Input, Icon } from "../shared/Styles";

const TodoItem = ({ id, title, completed }) => {
   const { dispatch } = useContext(Context);
   const cls = ["todo"];
   if (completed) {
      cls.push("completed");
   }

   return (
      <Li cls={cls.join(" ")}>
         <Label>
            <Input
               type="checkbox"
               checked={completed}
               onChange={() =>
                  dispatch({
                     type: "TOGGLE",
                     payload: id,
                  })
               }
            />
            <Span cls={cls.join(" ")}>{title}</Span>
            <i onClick={() => {
               dispatch({
                  type: "REMOVE",
                  payload: id,
               });
            }}>
               <Icon />
            </i>
         </Label>
      </Li>
   );
};

export default TodoItem;
