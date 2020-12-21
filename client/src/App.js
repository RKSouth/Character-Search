import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';
import Jumbotron from "./components/Jumbotron/index";
import Navbar from "./components/Navbar/index"; 
import Results from "./components/Results"
import Create from "./pages/Create"
// setting up the routes to the different pages in the application
function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Jumbotron} />
        <Route path="/search" component={Search} />
      <Route path="/Saved" component={Saved} />
      <Route path="/Results" component={Results} />
      <Route path="/Create" component={Create} />
      </Switch>
    </div>
  </Router>
  );
};

export default App;