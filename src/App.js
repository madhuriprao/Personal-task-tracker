import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Item from "./components/Item";
import todoData from "./data/Todo"; 
import './App.css'; // Import the CSS file

function App() {
  return (
<BrowserRouter>
<Header>
  <Routes path= "/" element = {<Home/>}></Routes>
     <Item todo={todoData[0]}/> 
     </Header>
     </BrowserRouter>
  )
}

export default App;
