// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { CssBaseline } from '@mui/material';

import { InputValidation, Navbar } from './components';
import { InputValidation, Navbar } from './components';
import { Home, JobSearch, EstimatedSalary } from './pages';

import './app.css';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/job-search' element={<JobSearch />} />
        <Route exact path='/estimated-salary' element={<EstimatedSalary />} />
      </Routes>
      <InputValidation />
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/job-search' element={<JobSearch />} />
        <Route exact path='/estimated-salary' element={<EstimatedSalary />} />
      </Routes>
      <InputValidation />
    </>
  );
}
