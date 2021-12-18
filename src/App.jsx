import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './app-router';
import Loader from './components/loader';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </Router>
  );
};
export default App;
