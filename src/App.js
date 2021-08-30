import "./App.css";
import Navbar from "./Navbar";
import "antd/dist/antd.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoReducer from "./TodoReducer";
import AddTask from "./AddTask";
import Todolist from "./Todolist";

function App() {
  const store = createStore(TodoReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <AddTask />
        <Todolist />
      </Provider>
    </div>
  );
}

export default App;
