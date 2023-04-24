import { createContext, useState } from "react";

const todosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  return (
    <todosContext.Provider value={[todos, setTodos]}>
      {children}
    </todosContext.Provider>
  );
};

export default todosContext;
