import React, { useEffect } from 'react';
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import TitleSpaceProject from '../components/TitleSpacePages/index_project'
import "./project.css"
import ReactGA from 'react-ga';
import Hexagon1 from '../components/Hexagon1';

ReactGA.initialize('UA-247449191-1');

const ProjectPage = () => {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  
  return (
    <>
        <Navbar/>
        <div className='infoSpace'>
          <div className='infoContainer'>
            <div className='infoLeft'>
              <TitleSpaceProject/>
            </div>
            <div className='infoRight'>
              <div className='infoWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Project
                </div>
                <div className='content'>
                  <h3>Phase 1</h3>
                  <div className='bodytext'>
                    <Hexagon1/>
                  </div>
                  <h3>Section 2</h3>
                  <div className='bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='bodytext'>
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