import React from "react";
import InsertUser from "./components/InsertUser";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewUser from "./components/ViewUser";

function App() {

  return (
    <div className="App">

        <Router>
          <Routes>
            <Route path="/insert" element={<InsertUser/>}/>
            <Route path="/" element={<ViewUser/>}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
