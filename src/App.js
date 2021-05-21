import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AmplifySignOut/>
       <h2>Đồ Án Cuối Kỳ Điện Toán Đám Mây - Amplify For Web - Nhóm 12</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
