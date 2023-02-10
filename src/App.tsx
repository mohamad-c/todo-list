import "./App.css";
import TaskCard from "./components/TaskCard";

const App = (): JSX.Element => {
  const somearr = [{ id: 0, title: "lskjd", status:"in progress" }];
  return (
    <div className="App">
      <TaskCard items={somearr} />
    </div>
  );
};

export default App;
