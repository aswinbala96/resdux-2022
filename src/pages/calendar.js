import React, { useEffect, useState } from 'react';
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpaceCalendar from '../components/TitleSpacePages/index_calendar'
import "./calendar.css"
import ReactGA from 'react-ga';

ReactGA.initialize('UA-247449191-1');

const CalendarPage = () => {
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
                              <li>Reader PT 1: Research and Design of UX</li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"}>Stages in Design Thinking Process</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_73"}>The Art of Game Design CH7: "Ideas"</a></li>
                            </ul>
                            {/* <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div> */}
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>RESDUX:Introduciton Slides</a>
                            <div style={{fontSize: '0.95em'}} className='note'>15th November (Tuesday)</div>
                            {/* <br/> */}
                            {/* <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div> */}
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Discovery Research/Topic Identification</a>
                            <div style={{fontSize: '0.95em'}}  className='note'>16th November (Wednesday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Discovery Research/Topic Identification</a>
                            <div style={{fontSize: '0.95em'}}  className='note'>17th November (Thursday)</div>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W2: Nov 21-25</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000054"}>Lazar CH 5: Surveys (Articulating Questions)</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B978012805390400008X"}>Lazar CH 8: Interviews & Focus Groups</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.coursera.org/lecture/interaction-design-capstone/participant-observation-uCubp"}>Video: Participant Observation</a></li>
                            </ul>
                          </td>
                          <td>
                          <a href={""} target={"_blank"} style={{}}>Surveys, Interviews, Focus Groups, & Observations</a>
                            <div style={{fontSize: '0.95em'}} className='note'>21st November (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Exam 1</a>
                            <div style={{fontSize: '0.95em'}} className='note'>24th November (Thursday)</div>
                            <div style={{fontSize: '0.95em'}} className='note'>Them 1 & Them 2 </div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Related Work & Interview Preparation</a>
                            <div style={{fontSize: '0.95em'}} className='note'>21st November (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Related Work & Interview Preparation</a>
                            <div style={{fontSize: '0.95em'}} className='note'>24th November (Thursday)</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Deliverable #1</a>
                            <div style={{fontSize: '0.95em'}} className='note'>25th November (Friday)</div>
                            <br/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W3: Nov 28-Dec 2</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000157"}>Lazar CH 15: Working with Human Subjects</a></li>
                              <li>Reader PT 2: Illustration & User Confrontation</li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_479"}>The Art of Game Design CH 28: Playtesting</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.coursera.org/lecture/human-computer-interaction/storyboards-paper-prototypes-and-mockups-78yeB"}>Video: Storyboards, Paper Prototypes & Mockups </a></li>
                              <li>Ethics Guidelines EEMCS</li>
                            </ul>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Working with Human Subjects</a>
                            <div style={{fontSize: '0.95em'}} className='note'>28th November (Monday)</div>
                            {/* <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div> */}
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Interviews & Lo-Fi Preparation</a>
                            <div style={{fontSize: '0.95em'}} className='note'>28th November (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Interviews & Lo-Fi Preparation</a>
                            <div style={{fontSize: '0.95em'}} className='note'>1st December (Thursday)</div>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W4: Dec 5-9</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000108"}>Lazar CH 10: Usability Testing</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B978012805390400011X"}>Lazar CH 11: Analyzing Qualitative Data</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.youtube.com/watch?v=AjFulCZglYo"}>Video: The Power of Prototyping </a></li>
                            </ul>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Analyzing Qualitative Data & Usability Testing</a>
                            <div style={{fontSize: '0.95em'}} className='note'>5th December (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Exam 2</a>
                            <div style={{fontSize: '0.95em'}} className='note'>8th December (Thursday)</div>
                            <div style={{fontSize: '0.95em'}} className='note'>Them 1 & Them 2 </div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Lo-Fi Prototyping & User Confrontations</a>
                            <div style={{fontSize: '0.95em'}} className='note'>5th December (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Lo-Fi Prototyping & User Confrontations</a>
                            <div style={{fontSize: '0.95em'}} className='note'>8th December (Thursday)</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Deliverable #2</a>
                            <div style={{fontSize: '0.95em'}} className='note'>9th December (Friday)</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W5: Dec 12-16</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000029"}>Lazar CH2: Experimental Research</a></li>
                              <li>Reader PT 3: Making Research</li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_549"}>The Art of Game Design CH33: Games Transform their Players</a></li>
                            </ul>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Experimental Research & Making Research</a>
                            <div style={{fontSize: '0.95em'}} className='note'>12th December (Monday)</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>12th December (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>15th December (Thursday)</div>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W6: Dec 19-23</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li>Something on Hi-Fi Prototyping?</li>
                              <li>Diagramming?</li>
                              <li>System Architecture?</li>
                            </ul>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>19th December (Monday)</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>19th December (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>22nd December (Thursday)</div>
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
                            </ul>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Experimental Design & Statistical Analysis</a>
                            <div style={{fontSize: '0.95em'}} className='note'>9th January (Monday)</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Research Designs & Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>9th January (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Research Designs & Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>12th January (Thursday)</div>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W8: Jan 16-20</td>
                          <td>
                            <ul style={{fontSize: '0.95em', marginLeft: '1em', listStyle: "circle"}}>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2012.pdf"}>Seven Research Contributions in HCI</a></li>
                              <li style={{cursor: "pointer"}}><a target={"_blank"} href={"https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2015.pdf"}>Catchy Titles Are Good: But Avoid Being Cute</a></li>
                            </ul>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Scientific Writing & Reporting</a>
                            <div style={{fontSize: '0.95em'}} className='note'>16th January (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Exam 2</a>
                            <div style={{fontSize: '0.95em'}} className='note'>8th December (Thursday)</div>
                            <div style={{fontSize: '0.95em'}} className='note'>Them 1 & Them 2 </div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Research Designs & Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>16th January (Monday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Research Designs & Hi-Fi Prototyping</a>
                            <div style={{fontSize: '0.95em'}} className='note'>19th January (Thursday)</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Deliverable #3</a>
                            <div style={{fontSize: '0.95em'}} className='note'>20th December (Friday)</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W9: Jan 23-27</td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Oral Reflection Meetings</a>
                            <div style={{fontSize: '0.95em'}} className='note'>25th January (Wednesday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Oral Reflection Meetings</a>
                            <div style={{fontSize: '0.95em'}} className='note'>26th January (Thursday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Oral Reflection Meetings</a>
                            <div style={{fontSize: '0.95em'}} className='note'>27th January (Friday)</div>
                            <a href={""} target={"_blank"} style={{}}>Oral Reflection Meetings</a>
                            <div style={{fontSize: '0.95em'}} className='note'>30th January (Monday)</div>
                          </td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W10: Jan 30-Feb 3</td>
                          <td>
                            <div className='note'>None</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Resit Exam</a>
                            <div style={{fontSize: '0.95em'}} className='note'>2nd February (Thursday)</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Demo Market</a>
                            <div style={{fontSize: '0.95em'}} className='note'>3rd February (Friday)</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>Final Project Report</a>
                            <div style={{fontSize: '0.95em'}} className='note'>3rd February (Friday)</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>Final Project Video</a>
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