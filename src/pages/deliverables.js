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

                  <h3>Deliverable 1</h3>
                  <div className='del-bodytext'>
                    <ul class= 'ul-style'>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>Due Date</span>: Friday, November 25, 2022 @23:59
                        </li>

                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            Checklist of Item to be Included:
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Chapter 1: Introduction (± 1 page)</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Chapter 2: Context analysis and concept (± 4-6 pages)</li>
                              <ul class= 'ul-style'>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>2.1: Research Question/s</li>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>2.2: Approach</li>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>2.3: Context Analysis: Literature and Related Work</li>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>2.4: Context Analysis: Interviews and Observations (Leave it Open)</li>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>2.5: Description of Target User Group and Domain</li>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>2.6: Product Concept and Global Requirements</li>
                              </ul>
                              
                            </ul>
                        </li>

                        <li>
                          <a href={"https://canvas.utwente.nl/courses/11018/files/3330979?module_item_id=366593"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Report Template (Refer to Chapter 5 in Manual)</a>
                        </li>

                        <li>
                          <a href={"https://canvas.utwente.nl/courses/11018/assignments/94188"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 1 Submission Link</a>
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
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Chapter 2: Context analysis and concept (± 4-6 pages)</li>
                              <ul class= 'ul-style'>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>2.4: Context Analysis: Interviews and Observations</li>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>2.5: Description of Target User Group and Domain (Updated)</li>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>2.6: Product Concept and Global Requirements (Updated)</li>
                              </ul>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Chapter 3: Design and Evaluation of Lo-fi Prototype(s) and Revised Product Concept (± 4-6 pages)</li>
                              <ul class= 'ul-style'>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>3.1: Lo-Fi Prototypes</li>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>3.2: Revised Product Concept and Requirements</li>
                              </ul>
                            </ul>
                        </li>
                        
                        <li>
                          <a href= {"https://canvas.utwente.nl/courses/11018/assignments/94189"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 2 Submission Link</a>
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
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Chapter 1: Introduction (± 1 page) (Updated)</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Chapter 4: Design of Final Hi-Fi Prototype (± 4-8 pages)</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Chapter 5: Evaluation – Plan for Experimental Research Study (± 4-6 pages)</li>
                              
                              <ul class= 'ul-style'>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>5.1: Evaluation plans</li>
                                <li style={{fontFamily: "Inconsolata, monospace"}}>5.2: Pilot</li>
                              </ul>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Chapter 6: Discussion (± 2-3 pages)</li>

                            </ul>
                        </li>

                        <li>
                          <a href= {"https://canvas.utwente.nl/courses/11018/assignments/94192"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Deliverable 3 Submission Link</a>
                        </li>
                    </ul>
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
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Final version of the project report</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Final project video</li>
                            </ul>
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            Project Report Grading Rubric:
                            <ul class= 'ul-style'>
                              <table className='tableDesign'>
                                {/* <tr>
                                  <th style={{borderTop: "2px solid #000000"}}><p className='del-tabletext'>Section</p></th>
                                  <th style={{borderTop: "2px solid #000000"}}>Page Limit</th>
                                  <th style={{borderTop: "2px solid #000000"}}>Points</th>
                                </tr> */}
                                <tr>
                                  <td style={{borderTop: "2px solid #000000"}}><b><p className='del-tabletext'>Abstract</p></b></td>
                                  <td style={{borderTop: "2px solid #000000"}}><b><p className='del-tabletext'>1 point</p></b></td>
                                </tr>
                                <tr>
                                  <td><b><p className='del-tabletext'>Introduction</p></b></td>
                                  <td><b><p className='del-tabletext'>2 points</p></b></td>
                                </tr>
                                <tr>
                                  <td><b><p className='del-tabletext'>Context Analysis & Concept</p></b></td>
                                  <td><b><p className='del-tabletext'>20 points</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Motivation</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>2 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Research Question/s</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Approach</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Context Analysis: Literature & Related Word</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Context Analysis: Interviews & Observations</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Description of Target User Group & Domain</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td ><p className='del-tabletext'>&emsp; &emsp; &emsp; Product Concept & Global Requirements</p></td>
                                  <td ><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td ><b><p className='del-tabletext'>Design & Evaluation of Lo-Fi Prototypes</p></b></td>
                                  <td ><b><p className='del-tabletext'>20 points</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Lo-Fi Prototypes</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>8 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Revised Product Concept & Requirements</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>8 points</p></td>
                                </tr>
                                <tr>
                                  <td ><p className='del-tabletext'>&emsp; &emsp; &emsp; Design Rationale</p></td>
                                  <td ><p className='del-tabletext'>4 points</p></td>
                                </tr>
                                <tr>
                                  <td ><b><p className='del-tabletext'>Design of Final Hi-Fi Prototype</p></b></td>
                                  <td ><b><p className='del-tabletext'>20 points</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Following Design Rationale</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>4 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Description of Prototype & Interaction</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>4 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Diagrams of the System</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>4 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Content of the Application</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>4 points</p></td>
                                </tr>
                                <tr>
                                  <td ><p className='del-tabletext'>&emsp; &emsp; &emsp; Underlying Principles, Heuristics & Guidelines</p></td>
                                  <td ><p className='del-tabletext'>4 points</p></td>
                                </tr>
                                <tr>
                                  <td ><b><p className='del-tabletext'>Plan for Experimental Research Study</p></b></td>
                                  <td ><b><p className='del-tabletext'>20 points</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Evaluation Plans</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>10 points</p></td>
                                </tr>
                                <tr>
                                  <td ><p className='del-tabletext'>&emsp; &emsp; &emsp; Pilot</p></td>
                                  <td ><p className='del-tabletext'>10 points</p></td>
                                </tr>
                                <tr>
                                  <td ><b><p className='del-tabletext'>Discussion</p></b></td>
                                  <td ><b><p className='del-tabletext'>10 points</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Brief Summary of Work and Main Outcomes</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>2 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Achievement of Global Aims</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>2 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Recommendations for Improvement</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>2 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Limitations to Product and Study</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>2 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{border: "none"}}><p className='del-tabletext'>&emsp; &emsp; &emsp; Lessons Learned</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>2 points</p></td>
                                </tr>
                              </table>
                            </ul>
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            Project Video Grading Rubric:
                            <ul class= 'ul-style'>
                              <table className='tableDesign'>
                                <tr>
                                  <td style={{borderTop: "2px solid #000000"}}><b><p className='del-tabletext'>User & Context</p></b></td>
                                  <td style={{borderTop: "2px solid #000000"}}><b><p className='del-tabletext'>15 point</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", paddingLeft: "50px"}}><p className='del-tabletext'>Does the video provide a clear picture of the target users and their context? </p></td>
                                  <td ><p className='del-tabletext'>15 points</p></td>
                                </tr>
                                <tr>
                                  <td><b><p className='del-tabletext'>Problem Definition</p></b></td>
                                  <td><b><p className='del-tabletext'>20 points</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", paddingLeft: "50px"}}>
                                    <p className='del-tabletext'>Is the problem statement / challenge clearly introduced? </p>
                                    <ul class= 'ul-style'>
                                      <li style={{fontFamily: "Inconsolata, monospace"}}>Who are the target users? </li>
                                      <li style={{fontFamily: "Inconsolata, monospace"}}>What User Experience is targeted? </li>
                                      <li style={{fontFamily: "Inconsolata, monospace"}}>What problem or opportunity is tackled by the system? </li>
                                      <li style={{fontFamily: "Inconsolata, monospace"}}>Why is it a relevant problem/opportunity? </li>
                                    </ul>
                                  </td>
                                  <td ><p className='del-tabletext'>20 points</p></td>
                                </tr>
                                <tr>
                                  <td><b><p className='del-tabletext'>Product Concept</p></b></td>
                                  <td><b><p className='del-tabletext'>30 points</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", paddingLeft: "50px", border: "none"}}> <p className='del-tabletext'>Is it clear from the video how the interactive system is a solution to the problem statement?</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>10 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", paddingLeft: "50px", border: "none"}}><p className='del-tabletext'>Does the video provide a clear and accessible account of how the system technically works? </p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>10 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", paddingLeft: "50px"}}><p className='del-tabletext'>Does the video provide a clear and accessible account of the main functions and key interactions that the system entails? </p></td>
                                  <td ><p className='del-tabletext'>10 points</p></td>
                                </tr>                                
                                <tr>
                                  <td ><b><p className='del-tabletext'>Proof of concept</p></b></td>
                                  <td ><b><p className='del-tabletext'>20 points</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", paddingLeft: "50px"}}><p className='del-tabletext'>Does the video convincingly show the effectiveness of the hi-fi prototype?s</p></td>
                                  <td ><p className='del-tabletext'>20 points</p></td>
                                </tr>
                                <tr>
                                  <td ><b><p className='del-tabletext'>Video aesthetics and comprehensibility</p></b></td>
                                  <td ><b><p className='del-tabletext'>15 points</p></b></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px",border: "none", paddingLeft: "50px"}}><p className='del-tabletext'>Is the audio clear and easy to follow? </p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", border: "none", paddingLeft: "50px"}}><p className='del-tabletext'>Does the video contain a clear storyline?</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", border: "none", paddingLeft: "50px"}}><p className='del-tabletext'>Is the video footage supportive of the storyline?</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", border: "none", paddingLeft: "50px"}}><p className='del-tabletext'>Do the visuals help convey the meaning and purpose of the concept easily?</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                                <tr>
                                  <td style={{width: "400px", border: "none", paddingLeft: "50px"}}><p className='del-tabletext'>Does the video look professional?</p></td>
                                  <td style={{border: "none"}}><p className='del-tabletext'>3 points</p></td>
                                </tr>
                              </table>
                            </ul>
                        </li>
                        <li>
                          <a href={"https://canvas.utwente.nl/courses/11018/assignments/94194"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Final Report Submission Link</a>
                        </li>
                        <li>
                          <a href={"https://canvas.utwente.nl/courses/11018/assignments/94195"} target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Final Video Submission Link</a>
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