import React, {useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import { NavBar, PrivateRoute } from "./components";
import { Home, Profile, ExternalApi, LeaderBoardPage } from "./views";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "./components/loading";

import "./App.css";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers)

 
const App = () => {
  const { isLoading } = useAuth0();

  useEffect(() => {
    document.title = "Tetris"
    }, [])
  
  if (isLoading) {
    return <Loading />;
  }

    return (
    <div id="app" className="d-flex flex-column h-100">
      <Provider store={store}>
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
          <Route path="/leaderboard" component={LeaderBoardPage} />
        </Switch>
      </Container>
      </Provider>
    </div>
  );
};

export default App;
