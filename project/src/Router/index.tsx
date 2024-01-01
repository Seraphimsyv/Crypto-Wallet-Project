import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export const Router = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}