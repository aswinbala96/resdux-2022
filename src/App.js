import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import LogisticPage from './pages/logistic';
import ProjectPage from './pages/project';
import CalendarPage from './pages/calendar';
import DeliverablesPage from './pages/deliverables';
import ResourcesPage from './pages/resources';
import ReactGa from 'react-ga';
import React, { useEffect } from 'react';

function initializeReactGA() {
  ReactGa.initialize('UA-123791717-1');
  ReactGa.pageview('/homepage');
}

function App() {
  return (
    <Router basename='/resdux-2022'>
      <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route exact path ="/project" element={<ProjectPage/>} />
        <Route exact path ="/calendar" element={<CalendarPage/>} />
        <Route exact path ="/deliverables" element={<DeliverablesPage/>} />
        <Route exact path ="/logistic" element={<LogisticPage/>} />
        <Route exact path ="/resources" element={<ResourcesPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
