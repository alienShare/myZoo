import logo from './logo.svg';
import './App.css';
import Site from "./containers/site/Site";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Site/>
     </BrowserRouter>
    </div>
  );
}

export default App;
