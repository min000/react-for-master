
import { 
  BrowserRouter as Router,
  Route, 
  Switch 
} from "react-router-dom";
import Home from "./routes/Home/Home";
import Detail from "./routes/Detail/Detail";
import CoinTracker from "./routes/CoinTracker/CoinTracker";
import MinutesToHours from "./routes/MinutesToHours/MinutesToHours";

function App(){
  return (
      <Router>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/MinutesToHours">
            <MinutesToHours />
          </Route>
          <Route path="/CoinTracker">
            <CoinTracker />
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}
export default App;
