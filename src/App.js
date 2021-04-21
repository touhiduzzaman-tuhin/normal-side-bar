import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Report from "./components/Pages/Report";
import Team from "./components/Pages/Team";
import Support from "./components/Pages/Support";
import Message from "./components/Pages/Message";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Sidebar />
      {/* <Header /> */}
      
      <Switch>

        <Route exact path="/" component={Home} />
        {/* <Route exact path="/sidebar1" component={Sidebar} /> */}
        <Route path="/products" component={Products} />
        <Route path="/reports" component={Report} />
        <Route path="/team" component={Team} />
        <Route path="/support" component={Support} />
        <Route path="/messages" component={Message} />
      </Switch>
    </Router>
  );
}

export default App;
