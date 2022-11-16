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
                      {/* <div onClick={clickSec7} class = 'sec-3'>
                          Office Hours
                      </div> */}
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
                      <li id = "dees" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content">
                            <h2 class="card_title">Dees Postma</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Lecturer</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>d.b.w.postma@utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Sports Interaction Technology. Movement Science. Quantitative Data Analysis. Scientific Reporting</p>
                          </div>
                        </div>
                      </li>
                      <li id = "champika" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content">
                            <h2 class="card_title">Champika Ranasinghe</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Lecturer</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>c.m.eparanasinghe@utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Tangible Interaction. Tangible Learning. Information Visualization. Embodied Control and Experiences. Data Physicalization. User Studies. Scientific Reporting</p>
                          </div>
                        </div>
                      </li>
                      <li id = "aswin" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content">
                            <h2 class="card_title">Aswin Balasubramaniam</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Lecturer</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>a.balasubramaniam@utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Sports Interaction Technology. User Studies. Software & Hardware Integration. Qualitative Analysis of Data. Ethical Procedures. <a href="https://www.youtube.com/watch?v=huOPVqztPdc" style={{color: "white"}}>Rubber Duck for Debugging</a></p>
                          </div>
                        </div>
                      </li>
                      <li id = "sander" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Sander Dullaert</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>s.a.dullaert@student.utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Literature Review. User Studies & Analysis. Statistical Analysis. Qualitative Analysis. Sensors. Arduino</p>
                          </div>
                        </div>
                      </li>
                      <li id = "gerg" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Gergana Dzhondzhorova</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>g.dzhondzhorova@student.utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Ethical Procedures. User Studies. Analysis. Project Management. Prototyping</p>
                          </div>
                        </div>
                      </li>
                      <li id = "eva" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Eva Lahuis</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>e.j.lahuis@student.utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Project Management. Ethical Procedures. Prototyping. Arduino. Programming </p>
                          </div>
                        </div>
                      </li>
                      <li id = "van" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Vanessa Markos</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>v.markos@student.utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Literature Review. User Studies & Analysis. Prototyping. Qualitative Analysis of Data. Project Management. Sports & Movement (Volleyball, Handball, Tennis, Athletics, Gym or Strength training). Learning (Neurodivergence)</p>
                          </div>
                        </div>
                      </li>
                      <li id = "ren" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Renske Mulder </h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>r.mulder-2@student.utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >User Studies & Analysis. Ethical Procedures. Qualitative Analysis of Data. Project Management. <a href="https://www.youtube.com/watch?v=huOPVqztPdc" style={{color: "white"}}>Rubber Duck for Debugging</a>. Swimming. Prototyping</p>
                          </div>
                        </div>
                      </li>
                      <li id = "strat" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Stratos Mytaros</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>e.mytaros@student.utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Literature Review. User Studies & Analysis. Statistical Analysis of Data. <a href="https://www.youtube.com/watch?v=huOPVqztPdc" style={{color: "white"}}>Rubber Duck for Debugging</a>. Project Management. Programming </p>
                          </div>
                        </div>
                      </li>
                      <li id = "han" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Hannah Ottenschot</h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>h.k.s.ottenschot@student.utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Literature Review. Project Management. User Studies & Analysis. Prototyping. <a href="https://www.youtube.com/watch?v=huOPVqztPdc" style={{color: "white"}}>Rubber Duck for Debugging</a>. Gymnastics</p>
                          </div>
                        </div>
                      </li>
                      <li id = "altea" class="cards_item">
                        <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                          <div class="card_content_ta">
                            <h2 class="card_title">Altea Vesta Junio </h2>
                            <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant</p>
                            <p class="card_text" style={{marginBottom: "1.25rem"}}>a.v.junio@student.utwente.nl</p>
                            <h2 class="card_title">Expertise</h2>
                            <p class="card_text" >Project Management. Prototyping. User Studies and Analysis </p>
                          </div>
                        </div>
                      </li>                      
                    </ul>
                    {/* Teaching Team Information End */}

                    <h3 ref={sec2}>Course Format</h3>
                    <div className='log-bodytext'>
                      Theory is taught through lectures and readings and assessed in written tests. You are required to study the exam readings prior to the 
                      corresponding lectures. A complete overview of the study materials for ResDesUX Theory can be found in the <a style={{fontFamily: "Inconsolota, monospace"}} target={"_blank"} href="https://canvas.utwente.nl/courses/11018/files/3330979?module_item_id=366593">course manual</a>. 
                      <br/>
                      The project applies this knowledge in practice in a full iterative process of Research and Design of User
                      Experience. Tutorials are mandatory and have project focused exercises to help you get started with
                      applying the theory to your own work. The group project is about developing Creative Technology
                      applications for the general domain of Learning, Movement and Sport. The project is organized in 3
                      phases:                   
                      <br/>
                      <br/>
                      <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Phase 1: Preliminary Analysis and ideation, weeks 1-2</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Phase 2: Lo-fi prototyping and User confrontations, weeks 3-4</li> 
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Phase 3: Hi-fi prototyping and Research Study, weeks 5-8</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Phase 4: Final deliverables and oral assessment meeting, weeks 9-10</li>
                        </ul>
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

                    <h3 ref={sec4}>Project work: Organization, General Requirements and Deliverables</h3>
                    <div className='log-bodytext'>
                      
                      
                      <h4>1. ResDesUX Project Theme:</h4>
                      <div className='log-bodytext'>
                        For your project work you will focus on the general domain of <b><em style={{fontFamily: "Inconsolota, monospace"}}>learning, movement, or sports</em></b>. Naturally,
                        you may also focus on combinations thereof (e.g., motor learning in sports). It is up to you to decide; try
                        to find a problem space that resonates with you, that is rich and relevant. Besides a relevant theme
                        (related to learning, movement, or sports), your project must have at least the following characteristics:
                        <br/>
                        <br/>
                        <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The project must be about interactive technology</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The system should target a User Experience</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The project must be carried out with real users from the 
                          intended target user group (it must be feasible to find and involve them)</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>The project should be feasible to carry out in the 8 weeks reserved for it
                        (especially note the limited time available for hi-fi implementation work)</li>
                        </ul>
                        <br/>
                      </div>

                      <h4>2. Group formation:</h4>
                      <div className='log-bodytext'>
                        For the project, you are required to form groups of <b style={{fontFamily: "Inconsolota, monospace"}}>4-5 people</b>. Empty groups have been created in
                        Canvas ("ResDesUX-ProjectGroups") for you to self sign-in. Please make sure that you finish signing into
                        groups before <b style={{fontFamily: "Inconsolota, monospace"}}>12.00 noon on 16.11.2022 (Wednesday Week 01)</b>. Teachers may alter the composition of
                        your group in favor of balancing or other practicalities. Your group composition will be made final before
                        the start of the first tutorial session later that day.
                      </div>
                      <h4>3. Collaboration:</h4>
                      <div className='log-bodytext'>
                        The organization of activities and communication within project teams is almost completely left to the teams themselves. 
                        Some suggestions: 
                        <br/>
                        <br/>
                        <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Assign a project coordinator or chairpersons</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Make agendas and minutes for important project meetings</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Discuss working agreements early on in the project: such as when you work together and when the team members can work 
                        independently, what your communication channels are, etc.</li>
                        </ul>
                        <br/>
                        You cannot hold each other accountable if there are no clear working agreements. We assume you already know how to divide tasks and plan project work in a group. It also
                        helps if you decide early on rules about project work for your group:
                        <br/>
                        <br/>
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
                        The university <b style={{fontFamily: "Inconsolota, monospace"}}>does not</b> provide any budget for the project. The project may require some resources, the
                        cost of which will have to be borne by the members of the project group. However, we do have quite
                        some hardware and existing setups, such as: 
                        <br/>
                        <br/>
                        <ul style={{fontSize: '1em', marginLeft: '1em', listStyle: "circle"}}>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Webcams and Kinect cameras</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Projectors</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Mobile truss</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Several robot platforms</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>HoloLens kits</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>HTC Vive kits</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Touch tablets</li>
                          <li style={{fontFamily: "Inconsolota, monospace"}}>Small Electronics</li>
                        </ul>
                        <br/>
                        Please contact Alfred de Vries (a.p.devries@utwente.nl) to see what you are
                        searching for is already available at the SmartXP. For 3D printing and laser cutting, the requests should be
                        made well in advance so that Alfred has enough time to schedule 3D printing/ laser cutting.
                        Check out the home page of this website for more information about useful hardware and software realted resource links.
                      </div>
                      <h4>5. General Requirements - Deliverables:</h4>
                      <div className='log-bodytext'> 
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
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>4. Academic Misconduct:</b></u> <br/>
                            Academic misconduct should be avoided at all times. Academic misconduct includes, but is not limited to,
                            plagiarizing the work of others; falsifying data; performing research without ethical consent; and/or
                            developing (technological) inventions for mal intent. Any behavior that goes against the scientific code of
                            conduct will be sanctioned. In case of doubt, refer to the ‘UTwente code of conduct’ page <a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href= "https://www.utwente.nl/en/service-portal/services/hr/resources/integrity/en/codes-of-conduct/code-of-ethics-english.pdf">here</a>. Report
                            scientific misconduct to the module coordinator
                          <br/>
                          <br/>
                        </div>
                      </div>
                      <h4>*6. Final Project Deliverables:</h4>
                      <div className='log-bodytext'>
                        Listed below are the four main deliverables for the project of ResDesUX. The assessment criteria for all of the 
                        deliverables can be found in the <a href="https://canvas.utwente.nl/courses/11018/files/3332142?module_item_id=366302" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"}><b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b></a> document provided on Canvas. 
                        <div className='log-bodytext'>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>1. Final Report:</b></u> <br/>
                          The final report is a compilation of your intermediate deliverables, included as chapters, plus a few extra sections. The 
                          template for the assessment of the final report is provided in the <a href="https://canvas.utwente.nl/courses/11018/files/3328308/" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"}><b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b></a> document, on Canvas.
                          <br/>
                          <br/>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>2. Hi-fi Prototype of Interactive System:</b></u> <br/>
                          The final hi-fi prototype of your interactive system is the main outcome and the result of your iterative design approach. You 
                          will demonstrate your hi-fi prototype during the oral reflection meeting. As such, the hi-fi prototype is required to be fully 
                          functional at that time. The prototype will be assessed during the oral reflection meeting. A template for the assessment of 
                          the final prototype is provided in the <a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href="https://canvas.utwente.nl/courses/11018/files/3328308/" ><b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b></a> document, 
                          on Canvas.
                          <br/>
                          <br/>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>3. Final Project Video:</b></u> <br/>
                          The final hi-fi prototype of your interactive system is the main outcome and the result of your iterative design approach. You 
                          will demonstrate your hi-fi prototype during the oral reflection meeting. As such, the hi-fi prototype is required to be fully 
                          functional at that time. The prototype will be assessed during the oral reflection meeting. A template for the assessment of 
                          the final prototype is provided in the <a href="https://canvas.utwente.nl/courses/11018/files/3328308/" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"}><b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b></a> document, 
                          on Canvas.
                          <br/>
                          <br/>
                          <u><b style={{fontFamily: "Inconsolota, monospace"}}>4. Oral Reflection Meeting:</b></u> <br/>
                          The oral reflection meeting is a summative moment that requires you to critically evaluate and discuss the nature of your 
                          project (report, hi-fi prototype, and project video). Due to the wide range in ResDesUX-projects, the oral reflection meeting 
                          will not be assessed on the basis of a standardized assessment form. However, a list of relevant talking points that will guide
                          the assessment of the oral reflection meeting is provided in the <a href="https://canvas.utwente.nl/courses/11018/files/3328308/" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"}><b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b></a> document, on Canvas.
                          <br/>
                          <br/>
                        </div>
                      </div>
                    </div>
                    
                    <h3 ref={sec5}>Grading</h3>
                    <div className='log-bodytext'>
                    <h4>ResDesUX Theory: </h4>
                    <div className='log-bodytext'>
                      The ResDesUX theory is assessed individually and graded on the basis of three written tests (closed book). Your final grade 
                      for the ResDesUX Theory is the weighted average of: <b style={{fontFamily: "Inconsolota, monospace"}}>Test 1 (30%)</b>, <b style={{fontFamily: "Inconsolota, monospace"}}>Test 2 (30%)</b>, 
                      <b style={{fontFamily: "Inconsolota, monospace"}}>Test 3 (40%)</b>. To help you study, you can earn bonus points. At the end of every lecture 
                      (except for the first one), there will be a short MC-test consisting of 5-10 questions. For every test that 
                      you pass, you will receive <b style={{fontFamily: "Inconsolota, monospace"}}>+0.1 points</b> on your final ResDesUX Theory grade. Thus, if you prepare your lectures 
                      well, you can earn a <b style={{fontFamily: "Inconsolota, monospace"}}>maximum of +0.7</b> bonus points. Your final overall ResDesUX Theory grade cannot be greater 
                      than 10.0. 
                    </div>
                    <h4>ResDesUX Project: </h4>
                    <div className='log-bodytext'>
                      The HCI project gets a group grade that is determined by the weighted average of four components: <b style={{fontFamily: "Inconsolota, monospace"}}>Final Project Report 
                      (50%)</b>; <b style={{fontFamily: "Inconsolota, monospace"}}>Final Interactive System (20%)</b>; <b style={{fontFamily: "Inconsolota, monospace"}}>Project Video (10%)</b> and <b style={{fontFamily: "Inconsolota, monospace"}}>Oral Reflection Meeting (20%)</b>. 
                      The assessment criteria for these components can be found in the <a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href="https://canvas.utwente.nl/courses/11018/files/3328308/"><b style={{fontFamily: "Inconsolota, monospace"}}>‘project assessment criteria’</b></a> document on Canvas
                      <br/>
                      <br/>
                      During the oral reflection meeting, you get the chance to reflect upon your design process and discuss
                      the project outcome with the teachers and teaching assistants. The project grade is determined by the
                      teaching team, taking this discussion into account. 
                      <br/>
                      <br/>
                      To manage the writing of the final report and to allow teachers to give feedback on the intermediate
                      results, project groups must hand in intermediate deliverables that are (more or less) standalone
                      chapters in the final report. The intermediate deliverables will also be reviewed by resit students – any
                      valuable insights that stem from their reviewing process will be delivered along with the feedback of the
                      teachers. Every student is required to take personal responsibility for various parts of the project
                    </div>
                    <h4>Card system for grading (ResDesUX Project): </h4>
                    <div className='log-bodytext'>
                    When you work in a group project, an important professional skill is to be able to hold one another
                    accountable for your work. To facilitate this, we use a system of yellow, red, and green cards.
                    <br/>
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
                      <br/>
                      If, after giving a yellow card, there are new reasons to give a yellow card, a student can get a second yellow card. Whenever a student has received two yellow cards; his/her project-grade will <b style={{fontFamily: "Inconsolota, monospace"}}>again be lowered by 1 point</b>. 
                      <br/>
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
                      Students who failed ResDesUX Theory last year but passed ResDesUX Project have the option to
                      complete an alternative assignment to complete the unit. For the alternative assignment, resit students
                      are required to review and feedback the intermediate deliverables <b style={{fontFamily: "Inconsolota, monospace"}}>(week 2; week 4; week 8)</b> of a number
                      of ResDesUX Project groups. Their reviews will be shared with the respective project groups. The details
                      of this alternative assignment will be communicated to the students at the start of the module
                    </div>
                    </div>
                    
                    <h3 ref={sec6}>Contact</h3>
                    <div className='log-bodytext'>
                      <u><b style={{fontFamily: "Inconsolota, monospace"}}>Communication Channels:</b></u> Teams, UTwente Email, and Canvas<br/>
                      <u><b style={{fontFamily: "Inconsolota, monospace"}}>Absences:</b></u> If you have to absent for a long period of time, please let your group members and the lecturers (contact listed above) about the length and general reason for absence.<br/>
                      <u><b style={{fontFamily: "Inconsolota, monospace"}}>Academic Accomodations:</b></u> Refer to the <a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href="https://canvas.utwente.nl/courses/11018/files/3321879/">Module Manual</a><br/>
                    </div>
                    {/* <h3 ref={sec7}>Office Hours/Availability Calendar</h3>
                    <div className='log-bodytext'>
                      <iframe className = "log-calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23e1dfe1&ctz=Europe%2FAmsterdam&showTitle=1&showNav=1&showPrint=1&showDate=1&showTz=1&showCalendars=0&src=ZW4uZHV0Y2gjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4" style={{width:"600px", height:"600px", scrolling:"no"}}></iframe>
                    </div> */}
                    
                    <h3 ref={sec8}>Smart XP and Design Lab Info</h3>
                    <div className='log-bodytext'>
                      Smart XP Lab: <a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href='https://www.utwente.nl/en/eemcs/smartxp/'>Website Link</a> and <a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href='https://smartxpwiki.ewi.utwente.nl/'>Wiki Link</a>
                      <br/>
                      Design Lab: <a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href='https://www.utwente.nl/en/designlab/students/'>Website Link</a>
                    </div>
                    <h3 ref={sec9}>Meeting Time and Location</h3>
                    <div className='log-bodytext'>
                      Check Rooster and Canvas for more accurate dates, time, and location for lectures and tutorials
                      <br/>
                      <b style={{fontFamily: "Inconsolota, monospace"}}>Week 1:</b> Lectures (Tuesday @ 13:45 @ NH 209) Tutorial (Wednesday @ 13:45 @ RA 2334 & 3334 and Thursday @ 13:45 @ NH 115 & 124)
                      <br/>
                      <b style={{fontFamily: "Inconsolota, monospace"}}>Weeks 2-6:</b> Lectures (Monday @ 10:45 @ OH 211) Tutorial (Monday and Thursday @ 13:45 @ Zi A 138)
                      <br/>
                      <b style={{fontFamily: "Inconsolota, monospace"}}>Week 7:</b> Lectures (Monday @ 10:45 @ OH 211) Tutorial (Monday @ 13:45 @ Zi A 138 and Thursday @ 8:45 @ Zi A 138)
                      <br/>
                      <b style={{fontFamily: "Inconsolota, monospace"}}>Week 8:</b> Lectures (Monday @ 10:45 @ OH 211) Tutorial (Monday @ 13:45 @ Zi A 138)
                      <br/>
                      <b style={{fontFamily: "Inconsolota, monospace"}}>Week 9:</b> Lectures (Tuesday @ 10:45 @ CR 2L) 
                      <br/>
                      <b style={{fontFamily: "Inconsolota, monospace"}}>Week 10:</b> Demo Market (Friday @ 8:45) 
                      <br/>
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