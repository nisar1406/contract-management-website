import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contracts from './components/contracts';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Profile from './components/profile';

import NotFound from './pages/error/404-page';
import Layout from './pages/layout';
import Login from './pages/login';
import SignUp from './pages/sign-up';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/contract-list" exact element={<Contracts />} />
        <Route path="/profile" exact element={<Profile />} />
        {/* <Route path='/contract/:contractId' exact element={<Article />} /> */}
        <Route element={<NotFound />} />
        {/* <Route element={<NotFoundPage />} /> */}

        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
