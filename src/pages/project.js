import React, { useEffect, useState , useRef} from 'react';
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpaceProject from '../components/TitleSpacePages/index_project'
import "./project.css"
import ReactGA from 'react-ga';
import Hexagon1 from '../components/Hexagon1';
import Hexagon2 from '../components/Hexagon2';
import Hexagon3 from '../components/Hexagon3';
import Hexagon4 from '../components/Hexagon4';
import { Co2Sharp } from '@mui/icons-material';

ReactGA.initialize('UA-247449191-1');

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const phase1 = useRef(null);
  const phase2 = useRef(null);
  const phase3 = useRef(null);
  const phase4 = useRef(null);

  const goTo = (pos) => {
    // const section = document.querySelector(pos)
    // console.log(pos);
    const element = document.getElementById(pos);
    element.scrollIntoView({behavior: 'smooth'});
  }

  const clickPhase1 = () => {
    phase1.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickPhase2 = () => {
    phase2.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickPhase3 = () => {
    phase3.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickPhase4 = () => {
    phase4.current?.scrollIntoView({behavior: 'smooth'});
  };

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  
  return (
    <>
        {/* <Sidebar id = "home" isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/> */}
        <div className='proSpace'>
          <div className='proContainer'>
            {/* <div className='proLeft'>
              <TitleSpaceProject/>
            </div> */}
            <div className='proRight'>
              <div className='proWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Project Resources
                </div>
                <div className='pro-content'>
                  <div className = "sticky-bar" style={{display: "block"}}>
                    <div class = 'phase-bar' style={{height: "5vh"}}>
                      <div onClick={clickPhase1} class = 'phase-1'>
                          Phase 1
                      </div>
                      <div onClick={clickPhase2} class = 'phase-2'>
                          Phase 2
                      </div>
                      <div onClick={clickPhase3} class = 'phase-3'>
                          Phase 3
                      </div>
                      <div onClick={clickPhase4} class = 'phase-4' >
                          Phase 4
                      </div>
                    </div>
                  </div>
                  <div style={{height: "100%", display:"flex", overflowY: "scroll", flexDirection: "column", paddingTop: "1%"}}>
                    <div className='pro-bodytext' >
                      This section provides an overview of the objectives that must be met during the various phases of the project. 
                      This is also coupled with some guiding examples and links to resources that will contribute to the progress of your report. 
                      <br/>
                    </div>
                    <h3 ref={phase1}>PHASE 1: <br/> CONTEXT ANALYSIS, PRELIMINARY ANALYSIS & IDEATION</h3>
                    <div className='pro-bodytext-hex' >
                      <Hexagon1 scrollPosition={goTo} />
                      {/* <h4 value = {word} style={{display: "block"}}>{word}</h4> */}
                    </div>
                    <div className='pro-bodytext'>
                      <h4 id="empphase1" className='sub-header'>Emphatize: Context Analysis</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Understand the user domain, the activities, problems, & challenges </li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Understand the space of technological approaches that you want to consider (including existing related/similar systems)</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Utilize online resources to conduct literature review</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingLeft: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000017"}>Lazar CH 1: Introduction to HCI Research</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Reader PT 1: Research and Design of UX</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"}>Stages in Design Thinking Process</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_73"}>The Art of Game Design CH7: "Ideas"</a></li>
                              
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Identify List of User Domains</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Identify List of Technology Domains</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Conduct literature Review</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Develop the Matrix</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4  style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Identify List of User Domains</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Identify List of Technology Domains</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u>
                        <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Conduct literature Review</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> 
                        <br/>
                        <u>Helpful Resources</u>

                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Develop the Matrix</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="defphase1" className='sub-header'>Define: Challenge</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000054"}>Lazar CH 5: Surveys (Articulating Questions)</a></li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B978012805390400008X"}>Lazar CH 8: Interviews & Focus Groups</a></li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.coursera.org/lecture/interaction-design-capstone/participant-observation-uCubp"}>Video: Participant Observation</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="ideaphase1" className='sub-header'>Ideate: Product Concept</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 className='sub-header'>Phase 1: Deliverable Checklist</h4>
                      <div className='check-box'>
                        <label class="container">One
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Two
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Three
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Four
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>

                    <h3 ref={phase2}>PHASE 2: <br/> LO-FI PROTOTYPING & USER CONFRONTATIONS</h3>
                    <div style={{padding: "100px 25px 25px 25px"}} className='pro-bodytext'>
                      <em><strong><u className = "stopText" style={{color: "red", fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>STOP!</u></strong></em> <u className = "deliverText" style={{fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>Deliverable Check</u><br/>
                      <p className = "deliverText2" style={{fontSize: "24px", fontFamily: "Inconsolata, monospace", width: "85%"}}>Ensure you have the things shown in the checklist before proceeding to Phase 2. If not please talk/contact the lecturers/TA</p>
                    </div>
                    <div className='pro-bodytext-hex'>
                      <Hexagon2 scrollPosition={goTo} />
                    </div>
                    <div className='pro-bodytext'>
                      <h4 id= "empphase2" className='sub-header'>Emphatize: Observations</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="emp2phase2" className='sub-header'>Emphatize: Interviews</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="defphase2" className='sub-header'>Define: Updated Challenge</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="ideaphase2" className='sub-header'>Ideate: Refined Product Concept</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="protophase2"  className='sub-header'>Prototype: Lo-Fi Prototype of Key Interactions</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="testphase2" className='sub-header'>Test: User Confrontations</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4  id="test2phase2" className='sub-header'>Test: Formulative Testing</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 className='sub-header'>Phase 2: Deliverable Checklist</h4>
                      <div className='check-box'>
                        <label class="container">One
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Two
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Three
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Four
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    
                    <h3 ref={phase3}>PHASE 3: <br/> HI-FI PROTOTYPING & PREPARATION OF RESEARCH STUDY</h3>
                    <div style={{padding: "100px 25px 25px 25px"}} className='pro-bodytext'>
                      <em><strong><u className = "stopText" style={{color: "red", fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>STOP!</u></strong></em> <u className = "deliverText" style={{fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>Deliverable Check</u><br/>
                      <p className = "deliverText2" style={{fontSize: "24px", fontFamily: "Inconsolata, monospace", width: "85%"}}>Ensure you have the things shown in the checklist before proceeding to Phase 3. If not please talk/contact the lecturers/TA</p>
                    </div>
                    <div className='pro-bodytext-hex'>
                      <Hexagon3 scrollPosition={goTo}/>
                    </div>
                    <div className='pro-bodytext'>
                      <h4 id = "protophase3" className='sub-header'>Prototype: Hi-Fi Prototype</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id = "testphase3" className='sub-header'>Test: Experimental Testing</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id = "test2phase3"  className='sub-header'>Test: User Confrontations</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 className='sub-header'>Phase 3: Deliverable Checklist</h4>
                      <div className='check-box'>
                        <label class="container">One
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Two
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Three
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Four
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>


                    <h3 ref={phase4}>PHASE 4: <br/> FINAL DELIVERABLES & ORAL ASSESSMENT MEETING</h3>
                    <div style={{padding: "100px 25px 25px 25px"}} className='pro-bodytext'>
                      <em><strong><u className = "stopText"  style={{color: "red", fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>STOP!</u></strong></em> <u className = "deliverText" style={{fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>Deliverable Check</u><br/>
                      <p className = "deliverText2" style={{fontSize: "24px", fontFamily: "Inconsolata, monospace", width: "85%"}}>Ensure you have the things shown in the checklist before proceeding to Phase 4. If not please talk/contact the lecturers/TA</p>
                    </div>
                    <div className='pro-bodytext-hex'>
                      <Hexagon4 scrollPosition={goTo}/>
                    </div>
                    <div className='pro-bodytext'>
                      <h4 id = "empphase4"className='sub-header'>Emphatize</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id = "defphase4" className='sub-header'>Define</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id = "ideaphase4" className='sub-header'>Ideate</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id = "protophase4" className='sub-header'>Prototype</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id = "testphase4" className='sub-header'>Test</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Item 5</li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Theory:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 1</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 2</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 3</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 4</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Topic 5</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Project Things to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 1</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 2</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 3</a>
                              </li>
                              <li>
                                <a href={"https://www.google.com"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Thing 4</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Thing 1</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 2</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 3</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Thing 4</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <u>Examples</u> <br/>
                        <u>Helpful Resources</u>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 className='sub-header'>Final Deliverable Checklist</h4>
                      <div className='check-box'>
                        <label class="container">One
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Two
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Three
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Four
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
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