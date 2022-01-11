import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authorize from './views/Authorize';
import { getUser } from './services/users';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Authorize currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
