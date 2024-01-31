import { useSafeState } from "ahooks";
import React, { createContext, useContext } from "react";

export const useSearchValue = () => {
  return useContext(TodoContext);
};

interface ISearchProviderProps {
  children: React.ReactNode;
}

interface Values {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search?: string;
}

const TodoContext = createContext<Values>({
  setSearch: () => {},
  search: "",
});

const TodoProvider: React.FC<ISearchProviderProps> = (props) => {
  const { children } = props;
  const [search, setSearch] = useSafeState<string>("");

  return (
    <TodoContext.Provider value={{ search, setSearch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
