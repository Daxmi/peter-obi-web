import React, { FC } from "react";
// import { Todo } from "../typing/todo.types";
// import { findAllTodos } from "../services/todo.service";
// import { SubTask } from "../typing/subtask.types";
// import FullpageLoader from "../components/loaders/fullpage.loader";

// interface TodoProps {
//   todos: Todo[];
//   addTodo: (todo: Todo) => void;
//   updateTodo: (todo: Todo) => void;
//   addSubtask: (todo_id: number, subtask: SubTask) => void;
//   updateSubtask: (todo_id: number, subtask: SubTask) => void;
// }

// const defaultValue: TodoProps = {
//   todos: [],
//   addTodo: () => {},
//   updateTodo: () => {},
//   addSubtask: () => {},
//   updateSubtask: () => {},
// };
// export const TodoContext = React.createContext(defaultValue);

// export const TodoContextProvider: FC = ({ children }) => {
//   const { Provider } = TodoContext;
//   const [todos, setTodos] = React.useState<Todo[]>([]);
//   const [isLoading, setIsLoading] = React.useState<boolean>(true);

//   React.useEffect(() => {
//     findAllTodos()
//       .then(({ data }) => {
//         setIsLoading(false);
//         if (data && data.data.todos) {
//           setTodos(data.data.todos);
//         }
//       })
//       .catch((err) => {
//         setIsLoading(false);
//       });
//   }, []);

//   //--> Add Todo
//   const addTodo = (todo: Todo) => {
//     setTodos((value) => [...value, todo]);
//   };
//   //--> update todo
//   const updateTodo = (updatedTodo: Todo) => {
//     const refreshedTodos = todos.map((todo) => {
//       if (todo.id === updatedTodo.id) todo = updatedTodo;
//       return todo;
//     });
//     setTodos(refreshedTodos);
//   };

//   //--> Add Subtask
//   const addSubtask = (todo_id: number, subtask: SubTask) => {
//     const refreshedTodos = todos.map((todo) => {
//       if (todo.id === todo_id) {
//         todo.subtasks = [...todo.subtasks!, subtask];
//       }
//       return todo;
//     });
//     setTodos(refreshedTodos);
//   };
//   //--> Update Subtask
//   const updateSubtask = (todo_id: number, updatedSubtask: SubTask) => {
//     const refreshedTodos = todos.map((todo) => {
//       if (todo.id === todo_id) {
//         todo.subtasks = todo.subtasks?.map((subtask) => {
//           if (subtask.id === updatedSubtask.id) subtask = updatedSubtask;

//           return subtask;
//         });
//       }
//       return todo;
//     });
//     setTodos(refreshedTodos);
//   };

//   const values = {
//     todos,
//     addTodo,
//     updateTodo,
//     addSubtask,
//     updateSubtask,
//   };
//   if (isLoading) return <FullpageLoader />;
//   return <Provider value={values}>{children}</Provider>;
// };

// export const useTodo = () => {
//   const ctx = React.useContext(TodoContext);

//   if (!ctx) {
//     throw new Error("useTodo must be used within a TodoContextProvider");
//   }

//   return ctx;
// };
