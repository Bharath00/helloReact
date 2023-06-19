import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import './App.css';

function App() {
  return (
    <h1> Hello World! </h1>
  );
}

function eventLogger(event, error) {
  console.log('Event:', event);
  if (error) {
    console.error('Error:', error);
  }
}

function tokenLogger(tokens) {
  console.log('Tokens:', tokens);
}

function KeycloakApp() {
  return (
    <ReactKeycloakProvider
      initOptions={{ onLoad: 'login-required' }}
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <App />
    </ReactKeycloakProvider>
  );
}

export default KeycloakApp;

