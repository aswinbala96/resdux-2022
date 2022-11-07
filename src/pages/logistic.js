import React, { useEffect, useState, useRef } from 'react';
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpaceLogistics from '../components/TitleSpacePages'

// **********************************
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// ****************************************
import "./logistic.css"
import ReactGA from 'react-ga';

ReactGA.initialize('UA-247449191-1');

const LogisticPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  const sec4 = useRef(null);
  const sec5 = useRef(null);
  const sec6 = useRef(null);
  const sec7 = useRef(null);
  const sec8 = useRef(null);
  const sec9 = useRef(null);
  

  const clickSec1 = () => {
    sec1.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickSec2 = () => {
    sec2.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickSec3 = () => {
    sec3.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickSec4 = () => {
    sec4.current?.scrollIntoView({behavior: 'smooth'});
  };
  const clickSec5 = () => {
    sec5.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickSec6 = () => {
    sec6.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickSec7 = () => {
    sec7.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickSec8 = () => {
    sec8.current?.scrollIntoView({behavior: 'smooth'});
  };

  const clickSec9 = () => {
    sec9.current?.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>
        <div className='logSpace'>
          <div className='logContainer'>
            <div className='logLeft'>
              <TitleSpaceLogistics/>
            </div>
            <div className='logRight'>
              <div className='logWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Logistics
                </div>
                <div className='log-content'>
                  <div className = "sticky-bar" style={{display: "block"}}>
                    <div class = 'phase-bar' style={{height: "5vh"}}>
                      <div onClick={clickSec1} class = 'sec-1'>
                          Team
                      </div>
                      <div onClick={clickSec2} class = 'sec-2'>
                          Course Format
                      </div>
                      <div onClick={clickSec3} class = 'sec-3'>
                          Learning Objective
                      </div>
                      <div onClick={clickSec4} class = 'sec-4' >
                          Project Work
                      </div>
                      <div onClick={clickSec5} class = 'sec-1'>
                          Grading
                      </div>
                      <div onClick={clickSec6} class = 'sec-2'>
                          Contact
                      </div>
                      <div onClick={clickSec7} class = 'sec-3'>
                          Office Hours
                      </div>
                      <div onClick={clickSec8} class = 'sec-4'>
                          Smart XP
                      </div>
                      <div onClick={clickSec9} class = 'sec-1'>
                          Meeting Time
                      </div>
                    </div>
                  </div>
                  {/* Teaching Team Information Start*/}
                  <div style={{height: "94%", display:"flex", overflowY: "scroll", flexDirection: "column", paddingTop: "1%"}}>
                    <h3 ref={sec1}>Teaching Team</h3>
                    <ul className='log-cards'>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content">
                            <h2 class="card_title">Dees Postma</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Lecturer</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>d.b.w.postma@utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Lo-Fi Prototyping</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content">
                            <h2 class="card_title">Champika Ranasinghe</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Lecturer</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>c.m.eparanasinghe@utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software Integration</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content">
                            <h2 class="card_title">Aswin Balasubramaniam</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Lecturer</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>a.balasubramaniam@utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software & Hardware Integration</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Sander Dullaert</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>s.a.dullaert@student.utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software & Hardware Integration</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Gergana Dzhondzhorova</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>g.dzhondzhorova@student.utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software & Hardware Integration</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Eva Lahuis</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>e.j.lahuis@student.utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software & Hardware Integration</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Vanessa Markos</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>v.markos@student.utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software & Hardware Integration</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Renske Mulder </h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>r.mulder-2@student.utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software & Hardware Integration</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Stratos Mytaros</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>e.mytaros@student.utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software & Hardware Integration</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Hannah Ottenschot</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>h.k.s.ottenschot@student.utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software & Hardware Integration</p>
                          </div>
                        </div>
                      </li>
                      <li class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Altea Vesta Junio </h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>a.v.junio@student.utwente.nl</p>
                            <h2 class="card_title">Specialities</h2>
                            <p class="card_text" >Design Methods. User Studies. Software & Hardware Integration</p>
                          </div>
                        </div>
                      </li>

                      
                    </ul>
                    {/* Teaching Team Information End */}

                    <h3 ref={sec2}>Course Format</h3>
                    <div className='log-bodytext'>
                      Theory is taught through lectures and readings and assessed in written tests. The project applies this knowledge in practice in a full iterative process 
                      of Research and Design of User Experience (4-5 people per group, form your own group). <b style={{fontFamily: "Inconsolota, monospace"}}>Tutorials</b> are mandatory and have project focused exercises to help 
                      you get started with applying the theory to your own work.                    
                    </div>

                    <h3 ref={sec3}>Course Learning Objectives</h3>
                    <div className='log-bodytext'>
                      <h4>Self-Directed Teamwork:</h4>
                      <div className='log-bodytext'>
                        <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student has the skills and knowledge to act as an autonomous developer, meaning that (s)he can direct his/her own project, identify, and choose interesting and feasible concepts, and realize a novel interactive system on his/her own initiative in a team with mixed expertise.</li>
                        </ul>
                      </div>
                      <h4>Context Analysis for User Experience and HCI:</h4>
                      <div className='log-bodytext'>
                        <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student knows a variety of methods to analyze a certain situation, such as ethnographic methods, surveys and/or interviews. </li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student can apply some of these methods to analyze an existing situation with (potential) users and can relate this to the use of existing (similar) interactive systems.</li> 
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student can formulate questions to query needs or other information about the targeted user group in the context of an interactive design project</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student can set up a survey or an interview as an instrument in a research project for answering specific research questions</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student can synthesize global (user) requirements that clearly follow from this analysis.</li>
                        </ul>
                      </div>
                      <h4>User Experience and HCI:</h4>
                      <div className='log-bodytext'>
                        <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student is able to work on the design and implementation of an intelligent interactive system, using techniques, theories, and results from various disciplines (human-computer interaction, cognitive psychology, ergonomics, graphical design, computer science, new media, smart technology).</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student can distinguish between designing for task performance and designing for experience (e.g., flow, types of "fun" and other dimensions of experience)</li> 
                        </ul>
                      </div>
                      <h4>Research Methods and Evaluation of User Experience in Interactive Systems:</h4>
                      <div className='log-bodytext'>
                        <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student knows methods to evaluate an interactive prototype with experts, such as cognitive walkthrough and heuristic evaluation.</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student knows methods to evaluate an interactive prototype with users (empirical evaluation methods, interviews, and surveys).</li> 
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student is able to apply various evaluation methods in a project: with users, without users (e.g., heuristic evaluation), and in different phases of the project. The student can collect data, analyze it, and draw conclusions from it.</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student knows how to set up a consent form and knows when it is required.</li> 
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student can give a summary of the main types of balanced experimental design and is able to set up and motivate a user experiment in the context of an interactive design project to answer specific questions regarding the usability or user experience of the design.</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The student is able to use SPSS for declarative and inferential statistical analysis to answer specific questions about the data collected in a user experiment and can explain the meaning of the outcomes of the statistical analysis.</li> 
                        </ul>
                      </div>
                    </div>

                    <h3 ref={sec4}>Information on Project Work: Organization, Deliverables and Requirements</h3>
                    <div className='log-bodytext'>
                      The project will be carried out in groups of <b style={{fontFamily: "Inconsolota, monospace"}}>4-5 students</b>. You form the groups yourself; instructions will be posted on 
                      Canvas. If the groups are unbalanced or not formed in due time, you will be assigned a group.
                      <h4>1. Group formation:</h4>
                      <div className='log-bodytext'>
                        After the very first lecture; you are asked to form groups on Canvas. Empty groups, accommodating 4 or 5 people will be 
                        made available. Your proposed group composition should be final by <b style={{fontFamily: "Inconsolota, monospace"}}>16-11-22 @ 12:00PM</b>. Teachers may alter the composition of 
                        your group in favor of balancing or other practicalities. Your group composition will be made final before the start of the
                        first tutorial session later that day.
                      </div>
                      <h4>2. Collaboration:</h4>
                      <div className='log-bodytext'>
                        The organization of activities and communication within project teams is almost completely left to the teams themselves. 
                        Some suggestions: 
                        <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Assign a project coordinator or chairpersons</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Make agendas and minutes for important project meetings</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Discuss working agreements early on in the project: such as when you work together and when the team members can work 
                        independently, what your communication channels are, etc.</li>
                        </ul>
                        You cannot hold each other accountable if there are no clear working agreements.
                      </div>
                      <h4>3. Planning and Task division:</h4>
                      <div className='log-bodytext'>
                        At the end of every phase in the project, you are expected to hand in a deliverable.
                        <br/>
                        <br/>
                        For every phase, there are a number of tasks. You need to plan these well. We assume you already know how to divide tasks 
                        and plan project work in a group. It also helps if you decide early on rules about project work for your group: 
                        <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>What happens if someone is late?</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>What happens if someone becomes sick?</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>What happens if someone does mediocre work? </li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>What happens if someone can’t make it to several meetings or is not involved?</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>How will you deal with “bottleneck expertises” (one person being the only one who can do/is involved in a certain part)?</li>
                        </ul>
                      </div>
                      <h4>4. Project Resources and Hardware for the Hi-Fi Prototype:</h4>
                      <div className='log-bodytext'>
                        The university <b style={{fontFamily: "Inconsolota, monospace"}}>does not</b> provide any budget for the project. The project may
                        require some resources, the cost of which will have to be borne by the members of the project group. However, we do have quite 
                        some hardware and existing setups, such as webcams and Kinect cameras, projectors, a mobile truss, fixed trusses in the lab, 
                        several robot platforms, HoloLens kits, HTC Vive kits, touch tables, and small electronics. If you think you need something that we
                        have, contact the project coordinator to see whether it can be made available for you. <a style={{fontFamily: "Inconsolota, monospace"}}>Click here</a> for more information about hardware and useful software realted resource links.
                      </div>
                      <h4>*5. Final Project Deliverables:</h4>
                      <div className='log-bodytext'>
                        Listed below are the four main deliverables for the project of ResDesUX. The assessment criteria for all of the 
                        deliverables can be found in the <b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b> document provided on Canvas. 
                        <div className='log-bodytext'>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>1. Final Report:</b></u> <br/>
                          The final report is a compilation of your intermediate deliverables, included as chapters, plus a few extra sections. The 
                          template for the assessment of the final report is provided in the <b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b> document, on Canvas.
                          <br/>
                          <br/>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>2. Hi-fi Prototype of Interactive System:</b></u> <br/>
                          The final hi-fi prototype of your interactive system is the main outcome and the result of your iterative design approach. You 
                          will demonstrate your hi-fi prototype during the oral reflection meeting. As such, the hi-fi prototype is required to be fully 
                          functional at that time. The prototype will be assessed during the oral reflection meeting. A template for the assessment of 
                          the final prototype is provided in the <b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b> document, 
                          on Canvas.
                          <br/>
                          <br/>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>3. Final Project Video:</b></u> <br/>
                          The final hi-fi prototype of your interactive system is the main outcome and the result of your iterative design approach. You 
                          will demonstrate your hi-fi prototype during the oral reflection meeting. As such, the hi-fi prototype is required to be fully 
                          functional at that time. The prototype will be assessed during the oral reflection meeting. A template for the assessment of 
                          the final prototype is provided in the <b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b> document, 
                          on Canvas.
                          <br/>
                          <br/>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>4. Oral Reflection Meeting:</b></u> <br/>
                          The oral reflection meeting is a summative moment that requires you to critically evaluate and discuss the nature of your 
                          project (report, hi-fi prototype, and project video). Due to the wide range in ResDesUX-projects, the oral reflection meeting 
                          will not be assessed on the basis of a standardized assessment form. However, a list of relevant talking points that will guide
                          the assessment of the oral reflection meeting is provided in the <b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b> document, on Canvas.
                          <br/>
                          <br/>
                        </div>
                      </div>
                      <h4>6. General Requirements - Deliverables:</h4>
                      <div className='log-bodytext'>
                        The results of the project are to be documented in reports and presented to others on various occasions. There are intermediate
                        project reports, and final deliverables on which the grade is based (final system, final report, video, and reflection meeting 
                        with coach and project coordinator). The final report consists of an extended and revised version of the combined larger 
                        intermediate deliverables. Details are given above and in the <b style={{fontFamily: "Inconsolota, monospace"}}> ‘final report template’</b> document; 
                        here we give some general requirements. 
                        <div className='log-bodytext'>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>1. Submit on Time:</b></u> <br/>
                          The deadlines for deliverables are therefore quite strict; late submissions will lead to a lower score for the <b style={{fontFamily: "Inconsolota, monospace"}}>“process and 
                          organization”</b> aspect of the project. Furthermore, in some cases handing in late will lead to not getting feedback on 
                          these documents – which means the quality of your end report will be lower.
                          <br/>
                          <br/>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>2. General Requirements for Delivered Documents:</b></u> <br/>
                            Submit reports through Canvas as <b style={{fontFamily: "Inconsolota, monospace"}}>PDF, A4, 11pt Arial, line spacing 1.5</b>. File name should be: <b style={{fontFamily: "Inconsolota, monospace"}}>group_#_D_#._"projectname".pdf</b>. 
                            (Group Number; Deliverable Number; Project Name)
                            <br/>
                            <br/>
                            So, if you are <em style={{fontFamily: "Inconsolota, monospace"}}>Group 5</em> your <em style={{fontFamily: "Inconsolota, monospace"}}>first deliverable</em>, developing a <em style={{fontFamily: "Inconsolota, monospace"}}>‘Train Game’</em>, is called <b style={{fontFamily: "Inconsolota, monospace"}}>group_5_D_1_TrainGame.pdf</b>
                          <br/>
                          <br/>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>3. Academic References:</b></u> <br/>
                            Given the nature of the project, many materials in your deliverables will consist of your own work, but you also must 
                            incorporate external sources (e.g., literature). Using material from other sources without reference or acknowledgements 
                            obviously counts as fraud (with severe consequences, as explained further in the M6 Module Manual). However, it may be useful
                            sometimes to include material and ideas from other sources. This is acceptable, as long as the majority of the presented work 
                            is your own, and any material from other sources is indicated as such, with proper academic references (see, e.g., the Purdue 
                            APA style guide). 
                          <br/>
                          <br/>
                        </div>
                      </div>
                    </div>
                    
                    <h3 ref={sec5}>Grading</h3>
                    <div className='log-bodytext'>
                    <h4>ResDesUX Theory: </h4>
                    <div className='log-bodytext'>
                      For ResDesUX Theory, your grade is given by your score on three separate tests: <b style={{fontFamily: "Inconsolota, monospace"}}>Test 1 (30%)</b>, <b style={{fontFamily: "Inconsolota, monospace"}}>Test 2 (30%)</b>, 
                      <b style={{fontFamily: "Inconsolota, monospace"}}>Test 3 (40%)</b>. To help you study, you can earn bonus points. At the end of every lecture 
                      (except for the first one), there will be a short MC-test consisting of 5-10 questions. For every test that 
                      you pass, you will receive <b style={{fontFamily: "Inconsolota, monospace"}}>+0.1 points</b> on your final ResDesUX Theory grade. Thus, if you prepare your lectures 
                      well, you can earn a <b style={{fontFamily: "Inconsolota, monospace"}}>maximum of +0.7</b> bonus points. Your final overall ResDesUX Theory grade cannot be greater 
                      than 10.0. 
                    </div>
                    <h4>ResDesUX Project: </h4>
                    <div className='log-bodytext'>
                      The HCI project gets a group grade that is determined by the weighted average of four components: <b style={{fontFamily: "Inconsolota, monospace"}}>Final Project Report 
                      (50%)</b>; <b style={{fontFamily: "Inconsolota, monospace"}}>Final Interactive System (20%)</b>; <b style={{fontFamily: "Inconsolota, monospace"}}>Project Video (10%)</b> and <b style={{fontFamily: "Inconsolota, monospace"}}>Oral Reflection Meeting (20%)</b>. The 
                      requirements for each of these components are given in the course manual and distributed in the various secitons of this website. 
                      During the oral reflection meeting, you get the chance to reflect upon your design process and discuss the project outcome 
                      with the teachers and teaching assistants. The project grade is determined by the teaching team, taking this discussion into 
                      account.
                    </div>
                    <h4>Green, Yellow & Red Card (ResDesUX Project): </h4>
                    <div className='log-bodytext'>
                      <u><b style={{fontFamily: "Inconsolota, monospace"}}>Green Card:</b></u> <br/>
                      At the end of the project, the team can decide that <b style={{fontFamily: "Inconsolota, monospace"}}>(at most)</b> one student receives a green card. A green card can be 
                      given to a student who has contributed an extraordinary effort to the project. A green card will gain the <b style={{fontFamily: "Inconsolota, monospace"}}>receiving student
                      one additional point </b> <u style={{fontFamily: "Inconsolota, monospace"}}>on the group grade</u> (unless the group grade is already a 10). Awarding of a green card must be 
                      communicated to the project coordinator at the latest during the oral reflection meeting, including a motivation.
                      <br/>
                      <br/>
                      <u><b style={{fontFamily: "Inconsolota, monospace"}}>Yellow Card:</b></u> <br/>
                      A yellow card is meant as an instrument to help manage project participation. A project team can give one or more members a yellow card. 
                      A yellow card is given to a student who does not contribute sufficiently to the project. A yellow card can be given when the rest of the 
                      team (<u style={{fontFamily: "Inconsolota, monospace"}}>unanimously</u>) thinks there is a good reason for it. Possible reasons might be: a student is repeatedly absent without cause, delivers 
                      insufficient results, results of too low quality, etc.<b style={{fontFamily: "Inconsolota, monospace"}}>The consequence of a yellow card is that the receiving student loses one point on the group grade. </b>
                      When a yellow card is given, the team will communicate this to the project coordinator immediately.
                      <br/>
                      <br/>
                      A yellow card can be withdrawn by the team if the receiving student has contributed additional compensating efforts. This will also be communicated immediately
                      to the project coordinator.
                      <br/>
                      If, after giving a yellow card, there are new reasons to give a yellow card, a student can get a second yellow card. Whenever a student has received two yellow cards; his/her project-grade will <b style={{fontFamily: "Inconsolota, monospace"}}>again be lowered by 1 point</b>. 
                      <br/>
                      A yellow card can only be useful in that way if there is still time to improve the situation after giving the card. <b style={{fontFamily: "Inconsolota, monospace"}}>Therefore, a yellow card can only be given until the Wednesday of week 8 of the project. </b>
                      Students who feel they received a yellow card unjustly, or who are otherwise unhappy with the way things go in the team, can of course approach the module coordinator to resolve this.
                      <br/>
                      <br/>
                      <u><b style={{fontFamily: "Inconsolota, monospace"}}>Red Card:</b></u> <br/>
                      A third yellow card will automatically lead to a red card, which means that student will <b style={{fontFamily: "Inconsolota, monospace"}}>get an extra assignment</b> to be determined by the 
                      project coordinator. A red card can only be given after consultation with the project coordinator.
                      <br/>
                    </div>
                    <h4>Resits: </h4>
                    <div className='log-bodytext'>
                      Resit students who completed the project before have the option to participate in peer reviewing instead of participating in the HCI Project. Peer 
                      reviews are written for all intermediate deliverables <b style={{fontFamily: "Inconsolota, monospace"}}>(week 2; week 4; week 8)</b>. Resit students share their peer-reviews with the lecturers who will 
                      communicate the feedback to the relevant groups. That way, resit students can make a meaningful contribution to the quality of the work of their 
                      peers.
                    </div>
                    </div>
                    
                    <h3 ref={sec6}>Contact</h3>
                    <div className='log-bodytext'>
                      <u><b style={{fontFamily: "Inconsolota, monospace"}}>Communication Channels:</b></u> Teams, UTwente Email, and Canvas<br/>
                      <u><b style={{fontFamily: "Inconsolota, monospace"}}>Academic Accomodations:</b></u> To be added<br/>
                      <u><b style={{fontFamily: "Inconsolota, monospace"}}>Absences:</b></u> If you have to absent for a long period of time, please let your group members and the lecturers (contact listed above) about the length and general reason for absence.<br/>
                    </div>
                    <h3 ref={sec7}>Office Hours/Availability Calendar</h3>
                    <div className='log-bodytext'>
                      <iframe className = "log-calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23e1dfe1&ctz=Europe%2FAmsterdam&showTitle=1&showNav=1&showPrint=1&showDate=1&showTz=1&showCalendars=0&src=ZW4uZHV0Y2gjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4" style={{width:"600px", height:"600px", scrolling:"no"}}></iframe>
                    </div>
                    
                    <h3 ref={sec8}>Smart XP Lab Info</h3>
                    <div className='log-bodytext'>
                      Smart XP Lab FAQ and Things to Know
                    </div>
                    <h3 ref={sec9}>Meeting Time and Location</h3>
                    <div className='log-bodytext'>
                      Every Monday and Thursday @ Time @ Location
                      Exception: 
                      1st Lecture
                      Other Exceptions
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

export default LogisticPage