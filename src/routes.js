import { lazy } from 'react';

const Home = lazy(() => import('./components/home'));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));

const Dashboard = lazy(() => import('./components/dashboard'));
const Contracts = lazy(() => import('./components/contracts'));
const Profile = lazy(() => import('./components/profile'));

const routes = [
  {
    title: 'Home',
    path: '/home',
    component: Home,
    exact: true,
    isPrivate: false
  },
  {
    title: 'Login',
    path: '/login',
    component: Login,
    exact: true,
    isPrivate: false
  },
  {
    title: 'Sign Up',
    path: '/sign-up',
    component: SignUp,
    exact: true,
    isPrivate: false
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    exact: true,
    isPrivate: true
  },
  {
    title: 'Contracts',
    path: '/contracts',
    component: Contracts,
    exact: true,
    isPrivate: true
  },
  {
    title: 'Profile',
    path: '/Profile',
    component: Profile,
    exact: true,
    isPrivate: true
  }
];

export default routes;
