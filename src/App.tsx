import React from 'react';
import MainLayout from './layouts/MainLayout';
import Router from './router';

function App() {
  return (
    <MainLayout>
      <Router />
      <div></div>
    </MainLayout>
  );
}

export default App;
