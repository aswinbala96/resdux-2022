import React from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import TitleSpaceDeliverables from '../components/TitleSpacePages/index_deliverables'
import "./deliverables.css"
import ReactGA from 'react-ga';

ReactGA.initialize('UA-247449191-1');

const DeliverablesPage = () => {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  
  return (
    <>
        <Navbar/>
        <div className='infoSpace'>
          <div className='infoContainer'>
            <div className='infoLeft'>
              <TitleSpaceDeliverables/>
            </div>
            <div className='infoRight'>
              <div className='infoWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Deliverables
                </div>
                <div className='content'>
                  <h3>Deliverables</h3>
                  <div className='bodytext'>
                    Listed below are the released deliverable for RESDUX 2022. More will be posted here as the quarter progresses. Go to home page for new announcements.
                  </div>

                  <h3>Final Deliverables</h3>
                  <div className='bodytext'>
                    <ul class= 'ul-style'>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>Due Date</span>: Friday, December 13, 20221 @23:59
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
                          <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 3 Link</a>
                        </li>
                    </ul>
                  </div>

                  <h3>Deliverable 3</h3>
                  <div className='bodytext'>
                    <ul class= 'ul-style'>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>Due Date</span>: Friday, December 13, 20221 @23:59
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
                          <span className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 3 Link</span>
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