import React, { useEffect, useState } from 'react';
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpaceProject from '../components/TitleSpacePages/index_project'
import TitleSpaceResources from '../components/TitleSpacePages/index_resources'
import "./resources.css"
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
        <div className='resSpace'>
          <div className='resContainer'>
            <div className='resLeft'>
              <TitleSpaceResources/>
            </div>
            <div className='resRight'>
              <div className='resWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Resources
                </div>
                <div className='res-content'>
                  <h3>Content and Grading</h3>
                  <div className='res-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 2</h3>
                  <div className='res-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='res-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='res-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='res-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='res-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Section 3</h3>
                  <div className='res-bodytext'>
                    Each assignment will be graded indvidually
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