import Home from "./components/Home";
import Item from "./components/Item";
import todoData from "./data/Todo"; 
import './App.css'; // Import the CSS file

function App() {
  return (
<>   <Home/>
     <Item todo={todoData[0]}/> 
     </> 
  )
}

export default App;
