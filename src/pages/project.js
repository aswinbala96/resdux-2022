import React, { useEffect, useState } from 'react';
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpaceProject from '../components/TitleSpacePages/index_project'
import "./project.css"
import ReactGA from 'react-ga';
import Hexagon1 from '../components/Hexagon1';
import Hexagon2 from '../components/Hexagon2';
import Hexagon3 from '../components/Hexagon3';

ReactGA.initialize('UA-247449191-1');

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  
  return (
    <>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>
        <div className='proSpace'>
          <div className='proContainer'>
            <div className='proLeft'>
              <TitleSpaceProject/>
            </div>
            <div className='proRight'>
              <div className='proWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Project
                </div>
                <div className='pro-content'>
                  <h3>Phase 1</h3>
                  <div className='pro-bodytext'>
                    <Hexagon1/>
                  </div>
                  <h3>Phase 2</h3>
                  <div className='pro-bodytext'>
                    <Hexagon2/>
                  </div>
                  <h3>Section 3</h3>
                  <div className='pro-bodytext'>
                    <Hexagon3/>
                  </div>
                  <h3>Section 3</h3>
                  <div className='pro-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='pro-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='pro-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='pro-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <div>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23e1dfe1&ctz=Europe%2FAmsterdam&showTitle=1&showNav=1&showPrint=1&showDate=1&showTz=1&showCalendars=0&src=ZW4uZHV0Y2gjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4" style={{width:"600px", height:"600px", scrolling:"no"}}></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
    </>
  )
}

export default ProjectPage