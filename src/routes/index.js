import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../view/Dashboard';

const RoutesPrimary = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesPrimary;
