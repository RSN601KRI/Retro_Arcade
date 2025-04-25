import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BedrockPassportProvider } from '@bedrocklabs/passport-react';

ReactDOM.render(
  <BedrockPassportProvider
    baseUrl="https://api.bedrockpassport.com"
    authCallbackUrl="http://localhost:3000/auth/callback"
    tenantId="your-project-id-from-dashboard"
  >
    <App />
  </BedrockPassportProvider>,
  document.getElementById('root')
);
