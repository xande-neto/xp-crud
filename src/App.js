import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Update from "./pages/Update";
import Read from "./pages/Read";
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Spread Configuration</h2>
        <div>
          <Route path="/create">
            <Create />
          </Route>
        </div>
        <div style={{ marginTop: 20 }}>
          <Route path="/">
            <Read />
          </Route>
        </div>

        <Route path="/update/:slug">
          <Update />
        </Route>
      </div>
    </Router>
  );
}

export default App;
