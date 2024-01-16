import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { SuccessPage } from '../pages/SuccessPage';

export const Router = () => {

  if (window.location.pathname === '/register')
    return <RegisterPage />

  else if (window.location.pathname === '/success')
    return <SuccessPage />

  return <HomePage />
}