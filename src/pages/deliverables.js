import React, { useEffect, useState } from 'react';
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpaceDeliverables from '../components/TitleSpacePages/index_deliverables'
import "./deliverables.css"
import ReactGA from 'react-ga';

ReactGA.initialize('UA-247449191-1');

const DeliverablesPage = () => {
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
        <div className='delSpace'>
          <div className='delContainer'>
            <div className='delLeft'>
              <TitleSpaceDeliverables/>
            </div>
            <div className='delRight'>
              <div className='delWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Deliverables
                </div>
                <div className='del-content'>
                  <h3>Deliverables</h3>
                  <div className='del-bodytext'>
                    Listed below are the deliverables for RESDUX 2022-23. More will be posted here as the quarter progresses. Visit Cavas for new announcements.
                    <br/>
                    <br/>
                    Each of the deliverables directly contributes to various chapters of the final report. However, please note that individual chapters might need updating after receiving feedback or acquiring new insights from your research and design work.
                    Upon completion, your project must have at least the following characteristics: 
                    <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                      <li style={{fontFamily: "Inconsolota, monospace"}}>The project must be about <u style={{fontFamily: "Inconsolota, monospace"}}>Interactive Technology</u></li>
                      <li style={{fontFamily: "Inconsolota, monospace"}}>The system should target a <u style={{fontFamily: "Inconsolota, monospace"}}>User Experience</u></li> 
                      <li style={{fontFamily: "Inconsolota, monospace"}}>The project must be carried out with <u style={{fontFamily: "Inconsolota, monospace"}}>real users</u> from the intended target user group (it must be feasible to find and involve them)</li>
                      <li style={{fontFamily: "Inconsolota, monospace"}}>The project should be <u style={{fontFamily: "Inconsolota, monospace"}}>feasible</u> to carry out in the 8 weeks reserved for it (especially note the limited time available for hi-fi implementation work)</li> 
                    </ul>
                    <br/>
                    <br/>
                  </div>

                  <h3>Final Deliverables</h3>
                  <div className='del-bodytext'>
                    <ul class= 'ul-style'>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>Due Date</span>: Friday, February 3, 2023 @23:59
                        </li>

                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            Checklist of Item to be Included:
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </li>


                        <li>
                          <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Final Deliverable Document Link</a>
                        </li>


                        <li>
                          <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Final Deliverable Submission Link</a>
                        </li>
                    </ul>
                  </div>

                  <h3>Deliverable 3</h3>
                  <div className='del-bodytext'>
                    <ul class= 'ul-style'>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>Due Date</span>: Friday, December 20, 2022 @23:59
                        </li>

                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            Checklist of Item to be Included:
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </li>

                        <li>
                          <span className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 3 Document Link</span>
                        </li>

                        <li>
                          <span className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 3 Submission Link</span>
                        </li>
                    </ul>
                  </div>

                  <h3>Deliverable 2</h3>
                  <div className='del-bodytext'>
                    <ul class= 'ul-style'>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>Due Date</span>: Friday, December 9, 2022 @23:59
                        </li>

                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            Checklist of Item to be Included:
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </li>

                        <li>
                          <span className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 2 Document Link</span>
                        </li>
                        
                        <li>
                          <span className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 2 Submission Link</span>
                        </li>
                    </ul>
                  </div>

                  <h3>Deliverable 1</h3>
                  <div className='del-bodytext'>
                    <ul class= 'ul-style'>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>Due Date</span>: Friday, November 25, 2022 @23:59
                        </li>

                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            Checklist of Item to be Included:
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </li>

                        <li>
                          <span className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 1 Document Link</span>
                        </li>

                        <li>
                          <span className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 1 Submission Link</span>
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
    </>
  )
}

export default DeliverablesPage