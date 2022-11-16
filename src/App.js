import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import LogisticPage from './pages/logistic';
import ProjectPage from './pages/project';
import CalendarPage from './pages/calendar';
import DeliverablesPage from './pages/deliverables';
import ResourcesPage from './pages/resources';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import MainDuplicate from './components/ContentDuplicate';

ReactGA.initialize('UA-247449191-1');

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  
  return (
    <Router basename='/resdux-2022'>
      <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route exact path ="/project" element={<ProjectPage/>} />
        <Route exact path ="/calendar" element={<CalendarPage/>} />
        <Route exact path ="/deliverables" element={<DeliverablesPage/>} />
        <Route exact path ="/logistic" element={<LogisticPage/>} />
        <Route exact path ="/resources" element={<ResourcesPage/>} />
        <Route exact path ="/home" element={<MainDuplicate/>} />
      </Routes>
    </Router>
  );
}

export default App;
