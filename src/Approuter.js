import React from "react";
import Create from "./Components/Create/Create";
import Read from "./Components/Read/Read";
import Update from "./Components/Update/Update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Approuter() {
    return (
        <div>
            <Router>
                <div className="main">
                    <h2 className="main-header">React Crud Operations</h2>
                    <Routes>
                        <Route exact path='/create' element={<Create />} />
                        <Route exact path='/read' element={<Read />} />
                        <Route path='/update' element={<Update />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}
export default Approuter;