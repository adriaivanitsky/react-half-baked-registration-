import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authorize from './services/views/Authorize';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Authorize}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
