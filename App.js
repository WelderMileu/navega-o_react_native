import React from 'react';
import { StatusBar } from 'react-native';

import Route from './routes/route';

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#099" />
      <Route />
    </React.Fragment>
  );
}

