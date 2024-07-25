// ThemeRoutes.js
// import React from 'react';
// import { lazy } from 'react';
// import { Navigate } from 'react-router-dom';
// import ProtectedRoute from '../ProtectedRoute.js';
// import { useAuth } from '../AuthContext.js';

// const FullLayout = lazy(() => import('../layouts/FullLayout.js'));
// const Login = lazy(() => import('../Login.js'));
// const Starter = lazy(() => import('../views/Starter.js'));
// const About = lazy(() => import('../views/About.js'));
// const Alerts = lazy(() => import('../views/ui/Alerts.js'));
// const Badges = lazy(() => import('../views/ui/Badges.js'));
// const Buttons = lazy(() => import('../views/ui/Buttons.js'));
// const Cards = lazy(() => import('../views/ui/Cards.js'));
// const Grid = lazy(() => import('../views/ui/Grid.js'));
// const Tables = lazy(() => import('../views/ui/Tables.js'));
// const Forms = lazy(() => import('../views/ui/Forms.js'));
// const Breadcrumbs = lazy(() => import('../views/ui/Breadcrumbs.js'));
// const MainPage = lazy(() => import('../components/dashboard/MainPage.js'));


// const ThemeRoutes = (user,setUser) => [
//   {
//     path: '/',
//     element: user ? <FullLayout /> : <Navigate to="/login" />,
//     children: [
//       {path: '/home', element: user ? <ProtectedRoute element={<FullLayout />} />: <Navigate to="/login" />},
//       { path: '/starter', element: user ? <ProtectedRoute element={<Starter />} /> : <Navigate to="/login" /> },
//       { path: '/starter/mainPage', element: user ? <ProtectedRoute element={<MainPage />} /> : <Navigate to="/login" /> },
//       { path: '/about', element: user ? <ProtectedRoute element={<About />} /> : <Navigate to="/login" /> },
//       { path: '/alerts', element: user ? <ProtectedRoute element={<Alerts />} /> : <Navigate to="/login" /> },
//       { path: '/badges', element: user ? <ProtectedRoute element={<Badges />} /> : <Navigate to="/login" /> },
//       { path: '/buttons', element: user ? <ProtectedRoute element={<Buttons />} /> : <Navigate to="/login" /> },
//       { path: '/cards', element: user ? <ProtectedRoute element={<Cards />} /> : <Navigate to="/login" /> },
//       { path: '/grid', element: user ? <ProtectedRoute element={<Grid />} /> : <Navigate to="/login" /> },
//       { path: '/table', element: user ? <ProtectedRoute element={<Tables />} /> : <Navigate to="/login" /> },
//       { path: '/forms', element: user ? <ProtectedRoute element={<Forms />} /> : <Navigate to="/login" /> },
//       { path: '/breadcrumbs', element: user ? <ProtectedRoute element={<Breadcrumbs />} /> : <Navigate to="/login" /> },
//     ],
//   },
//   // Define a separate route for the login page
//   { path: '/login', element: <Login /> },
//   // Redirect unknown routes to login page if user is not authenticated
//   { path: '*', element: user ? <Navigate to="/" /> : <Navigate to="/login" /> },
// ];


// export default ThemeRoutes;
import React from 'react';
import { Navigate } from 'react-router-dom';
import FullLayout from '../layouts/FullLayout';
import Login from '../Login';
import Starter from '../views/Starter';
import MainPage from '../components/dashboard/MainPage';
import About from '../views/About';
import Alerts from '../views/ui/Alerts';
import Badges from '../views/ui/Badges';
import Buttons from '../views/ui/Buttons';
import Cards from '../views/ui/Cards';
import Grid from '../views/ui/Grid';
import Tables from '../views/ui/Tables';
import Forms from '../views/ui/Forms';
import MatchList from '../MatchList';
import MatchPage from '../MatchPage';
import Breadcrumbs from '../views/ui/Breadcrumbs';
import ProtectedRoute from '../ProtectedRoute'; // Assuming you have a ProtectedRoute component

//explain me the below code

const ThemeRoutes = (user, setUser) => [
  { path: '/login', element: <Login setUser={setUser} /> },
  {
    path: '/',
    // TODO: we can use this in future
    element: <FullLayout />,
    children: [
      { path: '/', element: user ? <Navigate to="/starter" /> : <Navigate to="/login" /> },
      { path: '/homepage', element: user ? <MatchList /> : <Navigate to="/login" /> },
      {path: '/matchpage/:matchId', element: user ? <MatchPage /> : <Navigate to="/login" />},
      // {
      //   path: '/starter',
      //   element: user ?  <Starter />  : <Navigate to="/login" />,
      //   children: [
      //     { path: 'mainPage', element: <ProtectedRoute element={<MainPage />} /> },
      //   ],
      // },
      { path: '/about', element: user ? <ProtectedRoute element={<About />} /> : <Navigate to="/login" /> },
      { path: '/alerts', element: user ? <ProtectedRoute element={<Alerts />} /> : <Navigate to="/login" /> },
      { path: '/badges', element: user ? <ProtectedRoute element={<Badges />} /> : <Navigate to="/login" /> },
      { path: '/buttons', element: user ? <ProtectedRoute element={<Buttons />} /> : <Navigate to="/login" /> },
      { path: '/cards', element: user ? <ProtectedRoute element={<Cards />} /> : <Navigate to="/login" /> },
      { path: '/grid', element: user ? <ProtectedRoute element={<Grid />} /> : <Navigate to="/login" /> },
      { path: '/table', element: user ? <ProtectedRoute element={<Tables />} /> : <Navigate to="/login" /> },
      { path: '/forms', element: user ? <ProtectedRoute element={<Forms />} /> : <Navigate to="/login" /> },
      { path: '/breadcrumbs', element: user ? <ProtectedRoute element={<Breadcrumbs />} /> : <Navigate to="/login" /> },
    ],
  },
];

export default ThemeRoutes;
