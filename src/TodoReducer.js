const initialData = {
  todoList: [],
};

const TodoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo === action.payload.oldTodo) todo = action.payload.newTodo;

          return todo;
        }),
      };
  }

  return state;
};
export default TodoReducer;
