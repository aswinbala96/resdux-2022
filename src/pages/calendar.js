import React, { useEffect, useState, useNavigate } from 'react';
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpaceCalendar from '../components/TitleSpacePages/index_calendar'
import "./calendar.css"
import { Link } from "react-router-dom";
import { HashLink as Link1 } from 'react-router-hash-link';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-247449191-1');

const CalendarPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  // const navigate = useNavigate();

  // const navigateToEmpPhase1 = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/resdux-2022');
  // };

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
        <div className='calSpace'>
          <div className='calContainer'>
            <div className='calLeft'>
              <TitleSpaceCalendar/>
            </div>
            <div className='calRight'>
              <div className='calWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Calendar
                </div>
                <div className='cal-content'>
                  <div className='calendarBox'>
                    <div className='calendarBody'>
                      <table className='calendarTable'>
                        <tr>
                          <th>Week</th>
                          <th>Readings </th>
                          <th>Lectures</th>
                          <th>Tutorials</th>
                          <th>Deliverables</th>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W1: Nov 15-18</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000017"}>Lazar CH 1: Introduction to HCI Research</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 1: Research and Design of UX</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"}>Stages in Design Thinking Process</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_73"}>The Art of Game Design CH7: "Ideas"</a></li>
                            </ul>
                            {/* <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div> */}
                          </td>
                          <td>
                            {/* Add href={""} */}
                            <a href={"https://canvas.utwente.nl/courses/11018/files/3332163?module_item_id=366812"} target={"_blank"} style={{}}>RESDUX:Introduciton Slides</a> 
                            <div style={{fontSize: '0.95em'}} className='note'>15th November (Tuesday)</div>
                            {/* <br/> */}
                            {/* <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div> */}
                          </td>
                          <td>
                            {/* Add href={""} */}
                            <a href= "https://canvas.utwente.nl/courses/11018/files/3334366?module_item_id=367411" target={"_blank"} style={{}}>Discovery Research/Topic Identification</a>
                            <div style={{fontSize: '0.95em'}}  className='note'>16th (<a href={"https://canvas.utwente.nl/courses/11018/files/3334365?module_item_id=367434"} target={"_blank"} style={{}}>Wed</a>) & 17th (<a href={"https://canvas.utwente.nl/courses/11018/files/3336111?module_item_id=367803"} target={"_blank"} style={{}}>Thurs</a>) November </div>
                            <br/>
                            <div style={{}}>Objectives</div>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/#empphase1"><a >Description of target user group and domain</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#defphase1"><a >Develop Research Questions</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#ideaphase1"><a >Develop Relevant Product Concept and Global Requirements</a></Link1></li>
                            </ul>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td id = "exam1" style={{fontWeight: 'bold'}}>W2: Nov 21-25</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000054"}>Lazar CH 5: Surveys (Articulating Questions)</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B978012805390400008X"}>Lazar CH 8: Interviews & Focus Groups</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.coursera.org/lecture/human-computer-interaction/storyboards-paper-prototypes-and-mockups-78yeB"}>Video: Storyboards, Paper Prototypes & Mockups </a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.coursera.org/lecture/interaction-design-capstone/participant-observation-uCubp"}>Video: Participant Observation</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 2: Illustration & User Confrontation</a></li>
                            </ul>
                          </td>
                          <td>
                          {/* Add  */}
                            <a href={"https://canvas.utwente.nl/courses/11018/files/3341713?module_item_id=368518"} target={"_blank"} style={{}}>Surveys, Interviews, Focus Groups, & Observations</a>
                            <div style={{fontSize: '0.95em'}} className='note'>21st November (Monday)</div>
                            <br/>
                            {/* Add href={""} */}
                            <a href="https://canvas.utwente.nl/courses/11018/files/3338429?module_item_id=368192" target={"_blank"} style={{}}>Exam 1</a>
                            <div style={{fontSize: '0.95em'}} className='note'>24th November (Thursday)</div>
                            <div style={{fontSize: '0.95em'}} className='note'>Them 1 & Them 2 </div>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            Related Work & Interview Preparation
                            <div style={{fontSize: '0.95em'}} className='note'>21st (<a href={"https://canvas.utwente.nl/courses/11018/files/3341720?module_item_id=368522"} target={"_blank"} style={{}}>Mon</a>) & 24th (<a href={"https://canvas.utwente.nl/courses/11018/files/3348260?module_item_id=369652"} target={"_blank"} style={{}}>Thurs</a>) November</div>
                            <br/>
                            <div style={{}}>Objectives</div>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#ideaphase1"><a>Context Analysis: Literature & Related Work</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#ideaphase1"><a>Motivation for Product Concept</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#ideaphase1"><a>Relevant Approach to Elaborate on Product Concept</a></Link1></li>
                            </ul>
                          </td>
                          <td>
                            {/* Add href={""} to Canvas Page*/}
                            <a href={"https://canvas.utwente.nl/courses/11018/assignments/94188?module_item_id=366704"} target={"_blank"} style={{}}>Deliverable #1</a>
                            <div style={{fontSize: '0.95em'}} className='note'>25th November (Friday)</div>
                            <br/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W3: Nov 28-Dec 2</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000157"}>Lazar CH 15: Working with Human Subjects</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_479"}>The Art of Game Design CH 28: Playtesting</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.utwente.nl/en/eemcs/research/ethics/"}>Ethics Guidelines EEMCS</a></li>
                            </ul>
                          </td>
                          <td>
                            {/* Add  */}
                            <a href={"https://canvas.utwente.nl/courses/11018/files/3351335?module_item_id=369894"} target={"_blank"} style={{}}>Quiz Lecture</a>
                            <br/>
                            <a href={"https://canvas.utwente.nl/courses/11018/files/3354436?module_item_id=370050"} target={"_blank"} style={{}}>Working with Human Subjects: Elements of Ethics </a>
                            <br/>
                            <a href={"https://canvas.utwente.nl/courses/11018/files/3354436?module_item_id=370050"} target={"_blank"} style={{}}>Ethics: Edge Cases and Over the Edge</a>
                            <br/>
                            <a href={"https://canvas.utwente.nl/courses/11018/files/3354484?module_item_id=370056"} target={"_blank"} style={{}}>UT procedures and Working with Children-GDPR</a>
                            <div style={{fontSize: '0.95em'}} className='note'>28th November (Monday)</div>
                            {/* <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div> */}
                          </td>
                          <td>
                            {/* Add href={""} */}
                            Interviews & Lo-Fi Preparation
                            <div style={{fontSize: '0.95em'}} className='note'>28th November (<a href={"https://canvas.utwente.nl/courses/11018/files/3355475?module_item_id=370125"} target={"_blank"} style={{}}>Mon</a>) & 1st December (<a href={"https://canvas.utwente.nl/courses/11018/files/3361752?module_item_id=370848"} target={"_blank"} style={{}}>Thurs</a>)</div>
                            <br/>
                            <div style={{}}>Objectives</div>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#empphase2"><a>Apply Theory to Formulate Interview Questions & Plans to Record Observations</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#empphase2"><a >Understand Ethical Considerations for Performing Research</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#empphase2"><a >Apply Key Ethical Considerations for Research & Draft Ethical Consent Package</a></Link1></li>
                            </ul>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td id = "exam2" style={{fontWeight: 'bold'}}>W4: Dec 5-9</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000108"}>Lazar CH 10: Usability Testing</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B978012805390400011X"}>Lazar CH 11: Analyzing Qualitative Data</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.youtube.com/watch?v=AjFulCZglYo"}>Video: The Power of Prototyping </a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/pages/2022-wk-4-links-heuristics?module_item_id=371200"}>Heuristics Links</a></li>
                            </ul>
                          </td>
                          <td>
                            <a href = {"https://canvas.utwente.nl/courses/11018/files/3367992?module_item_id=371501"} target={"_blank"} style={{}}>Analyzing Qualitative Data & Usability Testing</a>
                            <div style={{fontSize: '0.95em'}} className='note'>5th December (Monday)</div>
                            <br/>
                            <a href="https://canvas.utwente.nl/courses/11018/files/3370654?module_item_id=371797" target={"_blank"} style={{}}>Exam 2</a>
                            <div style={{fontSize: '0.95em'}} className='note'>8th December (Thursday)</div>
                            <div style={{fontSize: '0.95em'}} className='note'>Them 1 & Them 2 </div>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            Lo-Fi Prototyping & User Confrontations
                            <div style={{fontSize: '0.95em'}} className='note'>5th (<a href={"https://canvas.utwente.nl/courses/11018/files/3398582?module_item_id=374753"} target={"_blank"} style={{}}>Mon</a>) & 8th Thurs December</div>
                            <br/>
                            <div style={{}}>Objectives</div>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                            
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#protophase2"><a>Apply Theory to Identify Key-Interactions</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#protophase2"><a>Apply Theory to Devise Meaningful Lo-Fi Prototypes</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#testphase2"><a>Apply Theory to Perform Meaningful Playtesting</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#testphase2"><a>Analyse and Evaluate Results from Interviews, Observations, & User Confrontations</a></Link1></li>
                            </ul>
                          </td>
                          <td>
                            {/* Add to Canvas*/}
                            <a href={"https://canvas.utwente.nl/courses/11018/assignments/94189?module_item_id=366705"} target={"_blank"} style={{}}>Deliverable #2</a>
                            <div style={{fontSize: '0.95em'}} className='note'>9th December (Friday)</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W5: Dec 12-16</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000029"}>Lazar CH2: Experimental Research</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 3: Making Research</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_549"}>The Art of Game Design CH33: Games Transform their Players</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/pages/2022-wk-5-materials-two-tognazzini-sources?module_item_id=372613"}>Tognazzini Sources</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"http://simonwallner.at/ext/fitts/"}>Fitts Test</a></li>
                            </ul>
                          </td>
                          <td>
                            {/* Add */}
                            <a href={"https://canvas.utwente.nl/courses/11018/files/3382253?module_item_id=372935"} target={"_blank"} style={{}}>Prototyping & Usability Testing</a>
                            <div style={{fontSize: '0.95em'}} className='note'>12th December (Monday)</div>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            Hi-Fi Prototyping
                            <div style={{fontSize: '0.95em'}} className='note'>12th (<a href={"https://canvas.utwente.nl/courses/11018/files/3398583?module_item_id=374754"} target={"_blank"} style={{}}>Mon</a>) & 15th (<a href={"https://canvas.utwente.nl/courses/11018/files/3398584?module_item_id=374755"} target={"_blank"} style={{}}>Thurs</a>) December</div>
                            <br/>
                            <div style={{}}>Objectives</div>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#protophase3"><a>Understand Underlying Principles, Heuristics, & Guidelines</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#protophase3"><a>Preliminary Description of Prototype and Interaction</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#protophase3"><a>Preliminary Diagrams of the System</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#protophase3"><a>Preliminary Content of the Application</a></Link1></li>
                            </ul>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W6: Dec 19-23</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li>Hi-Fi Prototyping</li>
                              <li>Diagramming</li>
                              <li>System Architecture</li>
                            </ul>
                          </td>
                          <td>
                            {/* Add  */}
                            <a href={"https://canvas.utwente.nl/courses/11018/files/3394589?module_item_id=374240"} target={"_blank"} style={{}}>Video Prototyping & Experimental Research</a>
                            <div style={{fontSize: '0.95em'}} className='note'>19th December (Monday)</div>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            Hi-Fi Prototyping
                            <div style={{fontSize: '0.95em'}} className='note'>19th Mon & 22nd Thurs December</div>
                            <br/>
                            <div style={{}}>Objectives</div>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#protophase3"><a>Updated Description of Prototype and Interaction</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#protophase3"><a>Updated Diagrams of the System</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#protophase3"><a>Updated Content of the Application</a></Link1></li>
                            </ul>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W7: Jan 9-13</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000030"}>Lazar CH3: Experimental Design</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000042"}>Lazar CH4: Statistical Analysis</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 4: Making Research</a></li>
                            </ul>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            <a href={"https://canvas.utwente.nl/courses/11018/files/3412709?module_item_id=376275"} target={"_blank"} style={{}}>Study Design, Statistics, and Measuring Success</a>
                            <div style={{fontSize: '0.95em'}} className='note'>9th January (Monday)</div>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            <a target={"_blank"} style={{}}>Research Designs & Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>9th (<a href={"https://canvas.utwente.nl/courses/11018/files/3412393?module_item_id=376191"} target={"_blank"} style={{}}>Mon</a>) & 12th (<a href={""} target={"_blank"} style={{}}>Thurs</a>) December</div>
                            <br/>
                            <div style={{}}>Objectives</div>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#testphase3"><a>Evaluation Plans</a></Link1></li>
                              <li style={{cursor: "pointer"}}><Link1 smooth to="/home#test2phase3"><a>Conduct Your Pilot Study</a></Link1></li>
                            </ul>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td id = "exam3" style={{fontWeight: 'bold'}}>W8: Jan 16-20</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2012.pdf"}>Seven Research Contributions in HCI</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2015.pdf"}>Catchy Titles Are Good: But Avoid Being Cute</a></li>
                            </ul>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            <a target={"_blank"} style={{}}>Scientific Writing & Reporting</a>
                            <div style={{fontSize: '0.95em'}} className='note'>16th January (Monday)</div>
                            <br/>
                            {/* Add href={""} */}
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={"_blank"} style={{}}>Exam 3</a>
                            <div style={{fontSize: '0.95em'}} className='note'>8th December (Thursday)</div>
                            <div style={{fontSize: '0.95em'}} className='note'>Them 1 & Them 2 </div>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            <a target={"_blank"} style={{}}>Research Designs & Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>16th (Mon) & 19th (Thur) January</div>
                            <br/>
                            <div style={{}}>Objectives</div>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a>Content for Introduction Section</a></li>
                              <li style={{cursor: "pointer"}}><a>Content for Discussion Section</a></li>
                            </ul>
                          </td>
                          <td>
                            {/* Add  */}
                            <a href={"https://canvas.utwente.nl/courses/11018/assignments/94192?module_item_id=366706"} target={"_blank"} style={{}}>Deliverable #3</a>
                            <div style={{fontSize: '0.95em'}} className='note'>20th December (Friday)</div>
                          </td>
                        </tr>
                        <tr>
                          <td id = "exam4" style={{fontWeight: 'bold'}}>W9: Jan 23-27</td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            <a target={"_blank"} style={{}}>Oral Reflection Meetings</a>
                            <div style={{fontSize: '0.95em'}} className='note'>25th January (Wednesday)</div>
                            <br/>
                            {/* Add href={""} */}
                            <a target={"_blank"} style={{}}>Oral Reflection Meetings</a>
                            <div style={{fontSize: '0.95em'}} className='note'>26th January (Thursday)</div>
                            <br/>
                            {/* Add href={""} */}
                            <a target={"_blank"} style={{}}>Oral Reflection Meetings</a>
                            <div style={{fontSize: '0.95em'}} className='note'>27th January (Friday)</div>
                            <br/>
                            {/* Add href={""} */}
                            <a target={"_blank"} style={{}}>Oral Reflection Meetings</a>
                            <div style={{fontSize: '0.95em'}} className='note'>30th January (Monday)</div>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td id = "exam5" style={{fontWeight: 'bold'}}>W10: Jan 30-Feb 3</td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={"_blank"} style={{}}>Resit Exam</a>
                            <div style={{fontSize: '0.95em'}} className='note'>2nd February (Thursday)</div>
                          </td>
                          <td>
                            {/* Add href={""} */}
                            <a target={"_blank"} style={{}}>Demo Market</a>
                            <div style={{fontSize: '0.95em'}} className='note'>3rd February (Friday)</div>
                          </td>
                          <td>
                            {/* Add  */}
                            <a href={"https://canvas.utwente.nl/courses/11018/assignments/94194?module_item_id=366707"} target={"_blank"} style={{}}>Final Project Report</a>
                            <div style={{fontSize: '0.95em'}} className='note'>3rd February (Friday)</div>
                            <br/>
                            {/* Add  */}
                            <a href={"https://canvas.utwente.nl/courses/11018/assignments/94195?module_item_id=366708"} target={"_blank"} style={{}}>Final Project Video</a>
                            <div style={{fontSize: '0.95em'}} className='note'>3rd February (Friday)</div>
                          </td>
                        </tr>
                      </table>
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

export default CalendarPage