import React from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import NotFound from './pages/error/404-page';
import Layout from './pages/layout';
import PrivateRoute from './private-route';

import routes from './routes';

const AppRouter = () => {
  const navigate = useNavigate();

  const privateRoutes = routes && routes.filter((route) => route.isPrivate);
  const publicRoutes = routes && routes.filter((route) => !route.isPrivate);

  return (
    <Layout>
      <Routes>
        {privateRoutes &&
          privateRoutes.map((route) => {
            const Component = route?.component;
            return (
              <Route element={<PrivateRoute />}>
                <Route
                  key={uuidv4()}
                  path={route?.path}
                  exact={route?.exact}
                  element={<Component useParams={useParams} navigate={navigate} test="test" />}
                />
              </Route>
            );
          })}

        {publicRoutes &&
          publicRoutes.map((route) => {
            const Component = route?.component;
            return (
              <Route
                key={uuidv4()}
                path={route?.path}
                exact={route?.exact}
                element={<Component navigate={navigate} />}
              />
            );
          })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
