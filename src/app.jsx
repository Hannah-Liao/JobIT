import { useState } from 'preact/hooks';
import './app.css';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Home, JobSearch, EstimatedSalary } from './pages';

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/job-search" element={<JobSearch />} />
        <Route exact path="/estimated-salary" element={<EstimatedSalary />} />
      </Routes>
    </>
  );
}
