// ThemeRoutes.js
import React from 'react';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute.js';
import { useAuth } from '../AuthContext.js';

const FullLayout = lazy(() => import('../layouts/FullLayout.js'));
const Login = lazy(() => import('../Login.js'));
const Starter = lazy(() => import('../views/Starter.js'));
const About = lazy(() => import('../views/About.js'));
const Alerts = lazy(() => import('../views/ui/Alerts.js'));
const Badges = lazy(() => import('../views/ui/Badges.js'));
const Buttons = lazy(() => import('../views/ui/Buttons.js'));
const Cards = lazy(() => import('../views/ui/Cards.js'));
const Grid = lazy(() => import('../views/ui/Grid.js'));
const Tables = lazy(() => import('../views/ui/Tables.js'));
const Forms = lazy(() => import('../views/ui/Forms.js'));
const Breadcrumbs = lazy(() => import('../views/ui/Breadcrumbs.js'));
const MainPage = lazy(() => import('../components/dashboard/MainPage.js'));

const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/login" /> },
      { path: '/login', element: <Login /> },
      {
        path: '/starter',
        element: <ProtectedRoute element={<Starter />} />,
        children: [
          { path: 'mainPage', element: <MainPage /> },
        ],
      },
      { path: '/about', element: <ProtectedRoute element={<About />} /> },
      { path: '/alerts', element: <ProtectedRoute element={<Alerts />} /> },
      { path: '/badges', element: <ProtectedRoute element={<Badges />} /> },
      { path: '/buttons', element: <ProtectedRoute element={<Buttons />} /> },
      { path: '/cards', element: <ProtectedRoute element={<Cards />} /> },
      { path: '/grid', element: <ProtectedRoute element={<Grid />} /> },
      { path: '/table', element: <ProtectedRoute element={<Tables />} /> },
      { path: '/forms', element: <ProtectedRoute element={<Forms />} /> },
      { path: '/breadcrumbs', element: <ProtectedRoute element={<Breadcrumbs />} /> },
    ],
  },
];

export default ThemeRoutes;
