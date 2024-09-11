import Home from "./components/Home";
import Item from "./components/Item";
import todoData from "./data/Todo"; 

function App() {
  return (
    <div className="container">
     <Home/>
     <Item todo={todoData[0]}/> 
            </div>
  )
}

export default App;
