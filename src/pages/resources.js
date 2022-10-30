import React, { useEffect, useState } from 'react';
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpaceProject from '../components/TitleSpacePages/index_project'
import TitleSpaceResources from '../components/TitleSpacePages/index_resources'
import "./logistic.css"
import ReactGA from 'react-ga';

ReactGA.initialize('UA-247449191-1');

const ResourcesPage = () => {
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
        <div className='infoSpace'>
          <div className='infoContainer'>
            <div className='infoLeft'>
              <TitleSpaceResources/>
            </div>
            <div className='infoRight'>
              <div className='infoWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Information
                </div>
                <div className='content'>
                  <h3>Content and Grading</h3>
                  <div className='bodytext'>
                    Each assignment will be graded indvidually
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

export default ResourcesPage