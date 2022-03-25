import Counter from "./pages/Counter";
import Grid from "./pages/Grid";
import Form from "./pages/Form";
import * as REact from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <Link to ="/" style ={{margin: 20}}>Counter</Link>
        <Link to ="/Grid" style ={{margin: 20}}>Grid</Link>
        <Link to ="/Form">Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/Grid" element={<Grid/>}/>
        <Route path="/Form" element={<Form/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}