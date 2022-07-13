import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  //These dont seem to be working at the moment.
  //   const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  //   const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  //   const audience = process.env.REACT_APP_AUDIENCE;

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="dev-tetris.eu.auth0.com"
      clientId="fQPgKWyL70WCnYLx91o1IqUGDz0RjHer"
      audience="https://tetris"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
