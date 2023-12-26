import { Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { SuccessPage } from '../pages/SuccessPage';

type RouteType = {
  path: string;
  element: React.ReactNode;
}

export const routes: RouteType[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/success',
    element: <SuccessPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];