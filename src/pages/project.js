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
import { HashLink as Link1 } from 'react-router-hash-link';
import userDomain from '../images/userdomimg.PNG';
import userDomainPDF from '../images/user_domain.pdf';
import techDomain from '../images/techdomimg.PNG';
import techDomainPDF from '../images/tech_domain.pdf';
import cogMap from '../images/cog_map.PNG';
import dayMap from '../images/day_map.PNG';
import resCol from '../images/res_col.PNG';
import aoki from '../images/aoki.png';
import brain from '../images/brain.png';
import kj from '../images/kj.png';
import mind from '../images/mind.png';
import sense from '../images/sense.png';
import mash from '../images/mash.png';
import dark from '../images/dark.png';
import lotus from '../images/lotus.png';
import click from '../images/click.PNG';
import harris from '../images/harris.PNG';
import navi from '../images/navi.PNG';
import paper from '../images/paper.PNG';
import story from '../images/story.PNG';


import cheat from '../images/cheat.PNG';
import incite from '../images/incite.PNG';
import acm from '../images/acm.PNG';
import ieee from '../images/ieee.PNG';
import jstor from '../images/jstor.PNG';
import doi from '../images/doi.PNG';
import open from '../images/open.PNG';
import scholar from '../images/scholar.PNG';
import scopus from '../images/scopus.PNG';
import dblp from '../images/dblp.PNG';

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
                    <h3 id="phase1" ref={phase1}>PHASE 1: <br/> CONTEXT ANALYSIS, PRELIMINARY ANALYSIS & IDEATION (Week 1-2)</h3>
                    <div className='pro-bodytext-hex' >
                      <Hexagon1 scrollPosition={goTo} />
                      {/* <h4 value = {word} style={{display: "block"}}>{word}</h4> */}
                    </div>
                    <div className='pro-bodytext'>
                      <h4 id="empphase1" className='sub-header'>Day 1: Emphatize: Context Analysis Part 1</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
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
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 1: Research and Design of UX</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"}>Stages in Design Thinking Process</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_73"}>The Art of Game Design CH7: "Ideas"</a></li>
                              
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Literature & Related Work</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingLeft: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#userdom"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Identify List of User Domains</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#techdom"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Identify List of Technology Domains</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#litreview"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Conduct Literature Review</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id="userdom" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Identify List of User Domains</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In this activity, as a group, you will look up a list of user domains for whom you would design an interactive user experience. <br/>
                                                                              When coming up with the user domains try to be specific enough that would enable you to come up with enough diverse ideas. Below we provide a chart that exemplifies the idea of a specific user domain. <br/>
                                                                              Moreover it might help to select an user domain within your field of expertise.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In order to facilitate this activity you can use either the <a target="_blank" href="https://toolkits.dss.cloud/design/method-card/lotus-blossom-2/" style={{fontFamily: "Inconsolata, monospace"}}>Lotus Blossom</a> or the <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href= "https://toolkits.dss.cloud/design/method-card/the-kj-method-2/">KJ Method</a> design methods to create a list of user domains. <br/>
                                                                             You will then utilize the <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href = "https://toolkits.dss.cloud/design/method-card/dot-voting/">Dot Voting </a> method to select the top five domains.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>When in doubt approach the teaching staff with any questions you may have</li>                                                                             
                        </ul>
                        <u>Examples</u> 
                        <br/>
                        <br/>
                        Click the image!
                        <br/>
                        <div style={{width: "137px", height: "83px" }}>
                          <a href={userDomainPDF} target="_blank"><img src={userDomain} /></a>
                        </div>
                        <br/>
                        <b>In this example the user domain focusses on the <u>diagnostic safety</u> in the combat <em>sport</em> of <u>boxing</u></b>.
                        <br/>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>List of Sports: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href='https://en.wikipedia.org/wiki/List_of_sports'>Link</a> (Reference: Wikipedia)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>List of Paralympics Sports: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://en.wikipedia.org/wiki/Paralympic_sports#Summer_Paralympics">Link</a> (Reference: Wikipedia)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Implementing the Lotus Blossom Method: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://thoughtegg.com/lotus-blossom-creative-technique/">Link</a> (Reference: Thought Egg)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Implementing the Lotus Blossom Method: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.lucidmeetings.com/glossary/lotus-blossom-technique">Link</a> (Reference: Lucid Meetings)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Implementing the KJ Method: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://sixsigmastudyguide.com/affinity-diagram/">Link</a> (Reference: Six Sigma Study Guide)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Implementing Dot Voting: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.nngroup.com/articles/dot-voting/">Link</a> (Reference: Nielsen Norman Group)</li>
                        </ul>
                      </div>

                      <h4 id="techdom" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Activity 2: Identify List of Technology Domains</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In this activity, as a group, you will look up a list of technology domains which would help drive the interaction. <br/>
                                                                              When selecting the technology domain try to understand its various functions and be specific when explaing it . Below we provide a chart that exemplifies the idea of a specific technology domain. <br/>
                                                                              Moreover it might help to select an technology that you already possess or is available to you from the university.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In order to facilitate this activity you can use either the <a target="_blank" href="https://toolkits.dss.cloud/design/method-card/lotus-blossom-2/" style={{fontFamily: "Inconsolata, monospace"}}>Lotus Blossom</a> or the <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href= "https://toolkits.dss.cloud/design/method-card/the-kj-method-2/">KJ Method</a> design methods to create a list of technology domains. <br/>
                                                                             You will then utilize the <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href = "https://toolkits.dss.cloud/design/method-card/dot-voting/">Dot Voting</a> method to select the top five domains.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>When in doubt approach the teaching staff with any questions you may have</li>                                                                             
                        </ul>
                        <u>Examples</u>
                        <br/>
                        <br/>
                        Click the image!
                        <br/>
                        <div style={{width: "90px", height: "88px" }}>
                          <a href={techDomainPDF} target="_blank"><img src={techDomain} /></a>
                        </div>
                        <br/>
                        <b> In this example the technology selected was a modular system with an <u>interactive surface</u> that detects <em>pressure differences</em> to present information using <em>LED lights</em>.</b>
                        <br/>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Interaction Lab Equipment List: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href='https://utwente-interaction-lab.booqable.shop/'>Link</a></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Smart XP Lab Equipment List: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://smartxpwiki.ewi.utwente.nl/doku.php">Link</a></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Implementing Dot Voting: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.nngroup.com/articles/dot-voting/">Link</a> (Reference: Nielsen Norman Group)</li>
                        </ul>
                      </div>

                      <h4 id="litreview" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Activity 3: Conduct literature Review</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>When searching for relevant user and technology domains you must use scientifc/academic work to justify your selection</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In order to that you must conduct a literature review. Below we provide two useful links that will help you to search for relevant scientific literature <b style={{fontFamily: "Inconsolata, monospace"}}>efficiently</b></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>We also provide a list of academic libraries and search engines you could use to conduct your literature review</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Cheat Sheet to Efficiently Search for Scientific Works: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href='https://s3.amazonaws.com/libapps/accounts/64602/images/Boolean_Cheat_Sheet_0.jpeg'>Link</a> (Reference: Northern Arizona University CLINE Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Website to Search for Similar Papers Quickly: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://inciteful.xyz/">Link</a> (Reference: Inciteful)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Google Scholar: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://scholar.google.com/">Link</a> (Reference: Google Scholar)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>ACM Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://dl.acm.org/">Link</a> (Reference: ACM Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>IEEE Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://ieeexplore.ieee.org/Xplore/home.jsp">Link</a> (Reference: IEEE Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>JSTOR Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.jstor.org/">Link</a> (Reference: JSTOR Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Open Research Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://openresearchlibrary.org/">Link</a> (Reference: Open Research Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Generating BibTEX Citations: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.doi2bib.org/">Link</a> (Reference: DOI 2 Bib)</li>
                        </ul>
                      </div>

                      
                    </div>

                    <div id="emp2phase1" className='pro-bodytext'>
                      <h4 className='sub-header'>Day 2: Emphatize: Context Analysis Part 2</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Further explore the selected combination of user and technology domains using any one or more of the shortlisted design method card</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingLeft: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000017"}>Lazar CH 1: Introduction to HCI Research</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 1: Research and Design of UX</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"}>Stages in Design Thinking Process</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_73"}>The Art of Game Design CH7: "Ideas"</a></li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Literature & Related Work</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#matrix"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Develop the Matrix</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#furtheremp"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Further Analyse the User and Technology Domain</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#litreview2"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Literature Review</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id="matrix" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Activity 1: Develop the Matrix</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>After shortlisting the <b style={{fontFamily: "Inconsolata, monospace"}}>top five</b> user and technology domains form the matrix as described during the introduction.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>After forming the matrix, use the <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href = "https://toolkits.dss.cloud/design/method-card/dot-voting/">Dot Voting </a> method once more to select one combination of user and technology domain.</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Implementing Dot Voting: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.nngroup.com/articles/dot-voting/">Link</a> (Reference: Nielsen Norman Group)</li>
                        </ul>
                      </div>

                      <h4 id="furtheremp" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 2: Further Analyse the User and Technology Domain</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In this activity you will conduct another round of emphatizing, but this time using more methods of design to obtain richer insights about the selected user and technology domain.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Below we have shortlisted few emphatize methods you could use to conduct the activity.</li>                                                                      
                          <li style={{fontFamily: "Inconsolata, monospace"}}>You do not need to have a set of participants or interview users at this stage yet. 
                          Instead make use of the framework/structure described in the design cards listed below and use existing literature and podcast/video interviews to know your users' domain.</li>                                                                      
                        </ul>
                        <u>Design Methods: Emphatize</u> 
                        <br/>
                        <br/>
                        Click the images to learn more about the various emphatizing method!
                        <br/>
                        <div style={{width: "80vh", display: "flex", flexDirection: "row", paddingTop: "5vh", padding: "1vh"}}>
                          <a href={"https://toolkits.dss.cloud/design/method-card/day-in-the-life/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "10px"}} src={dayMap} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/cognitive-map-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "10px"}} src={cogMap} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/research-collage/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "10px"}} src={resCol} /></a>
                        </div>
                        <br/>
                        <b>It would be beneficial to use information derived from podcast/video interviews and academic work to drive this session.</b>
                        <br/>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Implementing Day in Life Method: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://dscout.com/people-nerds/day-in-the-life">Link</a> (Reference: DScout) </li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Implementing Cognitive Map Method: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.nngroup.com/articles/cognitive-mapping-user-research/">Link</a> (Reference: Nielsen Norman Group)</li>
                        </ul>
                      </div>

                      <h4 id="litreview2" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Activity 3: Conduct literature Review</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>When searching for relevant user and technology domains you must use scientifc/academic work to justify your selection</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In order to that you must conduct a literature review. Below we provide two useful links that will help you to search for relevant scientific literature <b style={{fontFamily: "Inconsolata, monospace"}}>efficiently</b></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>We also provide a list of academic libraries and search engines you could use to conduct your literature review</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Cheat Sheet to Efficiently Search for Scientific Works: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href='https://s3.amazonaws.com/libapps/accounts/64602/images/Boolean_Cheat_Sheet_0.jpeg'>Link</a> (Reference: Northern Arizona University CLINE Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Website to Search for Similar Papers Quickly: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://inciteful.xyz/">Link</a> (Reference: Inciteful)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Google Scholar: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://scholar.google.com/">Link</a> (Reference: Google Scholar)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>ACM Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://dl.acm.org/">Link</a> (Reference: ACM Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>IEEE Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://ieeexplore.ieee.org/Xplore/home.jsp">Link</a> (Reference: IEEE Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>JSTOR Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.jstor.org/">Link</a> (Reference: JSTOR Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Open Research Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://openresearchlibrary.org/">Link</a> (Reference: Open Research Library)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Generating BibTEX Citations: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.doi2bib.org/">Link</a> (Reference: DOI 2 Bib)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className='pro-bodytext'>
                      <h4 id="defphase1" className='sub-header'>Day 2: Define: Research Question</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Pick one combination of technology and user domain</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Define your research quesitons</li>
                          </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000017"}>Lazar CH 1: Introduction to HCI Research</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 1: Research and Design of UX</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"}>Stages in Design Thinking Process</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Research Questions</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#choosing"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Choosing the cell (user + tech) that you like best</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#furtheremp"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Defining Research Questions</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#planinter"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Planning for Interviews</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id = "choosing" style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Choosing the cell (user + tech) that you like best</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In this activity, based on the information gathered for user ann technology domain you will select a combination you will focus on</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In order to facilitate this activity you can use the <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href = "https://toolkits.dss.cloud/design/method-card/dot-voting/">Dot Voting</a> method again.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Discuss with the lecturers/TA about your selection before proceeding</li>                                                                             
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Implementing Dot Voting: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.nngroup.com/articles/dot-voting/">Link</a> (Reference: Nielsen Norman Group)</li>
                        </ul>
                      </div>

                      <h4 style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Activity 2: Defining Research Questions</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>If you have not, conduct an in depth literature review of the final user domain. </li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>You should define RQ’s (based on related literature) and redefine it again based on more literature review. This is an iterative process.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>At the end of this activity you should have a number of well defined RQs, plus initial inventory of literature for each RQ (you must add more, later, in your own time)</li>                                                                             
                        </ul>
                        <u>Helpful Tips</u>
                        <br/>
                        <br/>
                        You can have various types of research questions. Some of the types that will be relevant to you and for this course include: Knowledge Questions, Design Questions, and Evaluation Questions.
                        <br/>
                        <br/>
                        Below we give examples how each of these types of question may look like:
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Knowledge Question</li>
                          <ul class= 'ul-style'> 
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Q: What are typical activities and experiences in a museum setting? </li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>A: Based on observation of …., papers by …., application of comparable commercial work such as … , and interviews with…. We found the following activities and experiences: … </li>
                          </ul>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Design Question</li>
                          <ul class= 'ul-style'> 
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Q: What is a good product for persuading people to practice their rowing movement execution in the right way? </li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>A1: the one I just made, because…</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>A2: NOT the one I just made, because…</li>
                          </ul>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Evaluation Question</li>
                          <ul class= 'ul-style'> 
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Q: What is the technical performance of my product? </li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>A: It can run uninterrupted without breaking for X hours consecutively, and it fails in the following conditions: …</li>
                          </ul>
                        </ul>
                        <br/>
                        <u>Examples</u>                         
                        <br/>
                        An example of a good research question is:
                        <ul class= 'ul-style'>                      
                          <li style={{fontFamily: "Inconsolata, monospace"}}>“to what extent can we improve [problem] of [user group] with [your technology]? </li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>To what extent can the motivation of professional cyclists be improved though an interactive indoor cycling setup?</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>A Step-by-Step Guide to Writing Better Research Questions: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://dscout.com/people-nerds/guide-better-questions">Link</a> (Reference: DScout)</li>
                        </ul>
                      </div>

                      <h4 id = "planinter" style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 3: Planning for Interviews</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In this activity, you will start thinking about your interview plans</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Check the resources linked below to help with your interview planning activity</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Interview Checklist: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://github.com/18F/ux-guide/blob/main/_pages/resources/interview-checklist.md/">Link</a> (Reference: 18F UX-Guide)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>UX Research Interview Questions: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://xd.adobe.com/ideas/process/user-research/user-interview-questions-ux-research/">Link</a> (Reference: Adobe XD)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>UX Research Tools Map: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://global-uploads.webflow.com/59ace8427353c50001765cbd/60d20b8dbb62405deb641ba2_2021-uxr-tools-map.pdf">Link</a> (Reference: User Interviews)</li>
                        </ul>
                      </div>

                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="idea2phase1" className='sub-header'>Day 2: Ideate: Product Concept</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Generate 50 Ideas</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 1: Research and Design of UX</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"}>Stages in Design Thinking Process</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_73"}>The Art of Game Design CH7: "Ideas"</a></li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Ideation</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                        <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#ideas"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Use the Ideation Cards to Generate 50 Ideas</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>
                      
                      <h4 id="ideas" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Use the Ideation Cards to Generate 50 Ideas</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In this activity you will generate 50 ideas based on your improved RQs plus what you learned from initial reading (“scanning”) of papers.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>You will utilize one of the shortlisted design cards (listed below) to conduct this activity</li>                                                                      
                        </ul>
                        <u>Design Methods: Ideate</u> 
                        <br/>
                        <br/>
                        Click the images to learn more about the various ideation method!
                        <br/>
                        <div style={{width: "80vh", display: "flex", flexDirection: "row", paddingTop: "5vh", padding: "1vh"}}>
                          <a href={"https://toolkits.dss.cloud/design/method-card/the-aoki-method-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={aoki} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/brain-writing-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={brain} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/the-kj-method-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={kj} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/mind-map-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={mind} /></a>
                        </div>
                        <div style={{width: "80vh", display: "flex", flexDirection: "row", paddingTop: "5vh", padding: "1vh"}}>
                          <a href={"https://toolkits.dss.cloud/design/method-card/sensorial-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={sense} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/mash-up/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={mash} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/dark-side/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={dark} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/lotus-blossom-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={lotus} /></a>
                        </div>
                        <br/>
                        <br/>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="ideaphase1" className='sub-header'>Days 3 & 4: Ideate: Refine Product Concept</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Discuss Progress with Lecturers & TAs</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Fine-tune User Domain/Technology Domain</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Develop Concept through Literature Research</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 1: Research and Design of UX</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"}>Stages in Design Thinking Process</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_73"}>The Art of Game Design CH7: "Ideas"</a></li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Ideation</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Literature & Related Work</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                        <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#progress"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Discuss Progress with Lecturers & TAs</a></Link1>                                
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#litday3"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Conduct Literature Review to Refine/Develop Concept</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id="progress" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Discuss Progress with Lecturers & TAs</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>On <a style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/discussion_topics/174687">Canvas</a>  there will be a schedule posted for the group meetings. During this time the Lecturers and TAs will discuss your group's progress.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Utilize this opportunity to ask questions and clarify any doubts you may have about where you are at this stage of the project</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>During the meeting come prepared to discuss the following:</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>What is your User Domain?</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>What is your Technology Domain?</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>What is your Problem Statement/Questions?</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>What are your Initial Ideas?</li>
                          </ul>
                        </ul>
                      </div>

                      <h4 id="litday3" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 2: Conduct Literature Review to Refine/Develop Concept</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>To further understand the user and the problem defined you must use scientifc/academic work to understand the relevance of the problem.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In order to find relevant scientific/academic works you must conduct a literature review. Below we provide two useful links that will help you to search for relevant scientific literature <b style={{fontFamily: "Inconsolata, monospace"}}>efficiently</b></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>We also provide a list of academic libraries and search engines you could use to conduct your literature review</li>
                        </ul>
                        <u>Helpful Resources for Literature Review</u> 
                        <br/>
                        <br/>
                        Click the images to utilize the various literature review resources!
                        <br/>
                        <div style={{width: "70vh", display: "flex", flexDirection: "row", paddingTop: "5vh", padding: "1vh"}}>
                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className='img-txt' style={{fontSize: "15px", fontWeight: "800"}}>Cheat Sheet</div>
                            <a href={"https://s3.amazonaws.com/libapps/accounts/64602/images/Boolean_Cheat_Sheet_0.jpeg"} target="_blank"><img style={{width: "100vh", height: "20vh", paddingRight: "5px"}} src={cheat} /></a>
                            <div style={{fontSize: "10px"}}>Cheat Sheet to Efficiently Search for Scientific Works: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href='https://s3.amazonaws.com/libapps/accounts/64602/images/Boolean_Cheat_Sheet_0.jpeg'>Link</a> (Reference: Northern Arizona University CLINE Library)</div>
                          </div>
                          
                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className='img-txt' style={{fontSize: "15px", fontWeight: "800"}}>Inciteful</div>
                            <a href={"https://inciteful.xyz/"} target="_blank"><img style={{width: "100vh", height: "7vh", paddingRight: "5px"}} src={incite} /></a>
                            <div style={{fontSize: "10px"}}>Website to Search for Similar Papers Quickly: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://inciteful.xyz/">Link</a> (Reference: Inciteful)</div>
                          </div>

                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className='img-txt' style={{fontSize: "15px", fontWeight: "800"}}>SCOPUS</div>
                            <a href={"https://www.scopus.com/search/form.uri?display=basic#basic"} target="_blank"><img style={{width: "100vh", height: "7vh", paddingRight: "5px"}} src={scopus} /></a>
                            <div style={{fontSize: "10px"}}>SCOPUS: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.scopus.com/search/form.uri?display=basic#basic">Link</a> (Reference: SCOPUS)</div>
                          </div>

                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className='img-txt'  style={{fontSize: "15px", fontWeight: "800"}}>ACM</div>
                            <a href={"https://dl.acm.org/"} target="_blank"><img style={{width: "20vh", height: "5vh", paddingRight: "5px"}} src={acm} /></a>
                            <div style={{fontSize: "10px"}}>ACM Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://dl.acm.org/">Link</a> (Reference: ACM Library)</div>
                          </div>
                        </div>
                        <br/>
                        <div style={{width: "70vh", display: "flex", flexDirection: "row", paddingTop: "5vh", padding: "1vh"}}>
                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div style={{fontSize: "15px", fontWeight: "800"}}>IEEE</div>
                            <a href={"https://ieeexplore.ieee.org/Xplore/home.jsp"} target="_blank"><img style={{width: "30vh", height: "6.5vh", paddingRight: "5px"}} src={ieee} /></a>
                            <div style={{fontSize: "10px"}}>IEEE Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://ieeexplore.ieee.org/Xplore/home.jsp">Link</a> (Reference: IEEE Library)</div>
                          </div>
                          
                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div style={{fontSize: "15px", fontWeight: "800"}}>JSTOR</div>
                            <a href={"https://www.jstor.org/"} target="_blank"><img style={{width: "20vh", height: "6vh", paddingRight: "5px"}} src={jstor} /></a>
                            <div style={{fontSize: "10px"}}>JSTOR Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.jstor.org/">Link</a> (Reference: JSTOR Library)</div>
                          </div>

                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div style={{fontSize: "15px", fontWeight: "800"}}>Open Research</div>
                            <a href={"https://openresearchlibrary.org/"} target="_blank"><img style={{width: "15vh", height: "7vh", paddingRight: "5px"}} src={open} /></a>
                            <div style={{fontSize: "10px"}}>Open Research Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://openresearchlibrary.org/">Link</a> (Reference: Open Research Library)</div>
                          </div>

                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div style={{fontSize: "15px", fontWeight: "800"}}>DBLP</div>
                            <a href={"https://dblp.org/"} target="_blank"><img style={{width: "15vh", height: "6vh", paddingRight: "5px"}} src={dblp} /></a>
                            <div style={{fontSize: "10px"}}>DBLP Library: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://dblp.org/">Link</a> (Reference: DBLP)</div>
                          </div>
                        </div>
                        <br/>
                        <div style={{width: "70vh", display: "flex", flexDirection: "row", paddingTop: "5vh", padding: "1vh"}}>
                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div style={{fontSize: "15px", fontWeight: "800"}}>Scholar</div>
                            <a href={"https://scholar.google.com/"} target="_blank"><img style={{width: "20vh", height: "7vh", paddingRight: "5px"}} src={scholar} /></a>
                            <div style={{fontSize: "10px"}}>Google Scholar: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://scholar.google.com/">Link</a> (Reference: Google Scholar)</div>
                          </div>
                          
                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div style={{fontSize: "15px", fontWeight: "800"}}>DOI2BIB</div>
                            <a href={"https://www.doi2bib.org/"} target="_blank"><img style={{width: "30vh", height: "6vh", paddingRight: "5px"}} src={doi} /></a>
                            <div style={{fontSize: "10px"}}>Generating BibTEX Citations: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.doi2bib.org/">Link</a> (Reference: DOI 2 Bib)</div>
                          </div>

                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div style={{fontSize: "15px", fontWeight: "800"}}> </div>
                            {/* <a href={"https://www.doi2bib.org/"} target="_blank"><img style={{width: "30vh", height: "6vh", paddingRight: "5px"}} src={doi} /></a> */}
                            {/* <div style={{fontSize: "10px"}}>Generating BibTEX Citations: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.doi2bib.org/">Link</a> (Reference: DOI 2 Bib)</div> */}
                          </div>
                          
                          <div style={{width: "25vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div style={{fontSize: "15px", fontWeight: "800"}}> </div>
                            {/* <a href={"https://www.doi2bib.org/"} target="_blank"><img style={{width: "30vh", height: "6vh", paddingRight: "5px"}} src={doi} /></a> */}
                            {/* <div style={{fontSize: "10px"}}>Generating BibTEX Citations: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.doi2bib.org/">Link</a> (Reference: DOI 2 Bib)</div> */}
                          </div>
                        </div>
                        <br/>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 className='sub-header'>Phase 1: Deliverable Checklist</h4>
                      <div className='check-box'>
                        <label class="container">Chapter 1: Introduciton
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Chapter 2: Context Analysis and Concept
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Section 2.1: Research Questions
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Section 2.2: Approach
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Section 2.3: Context Analysis: Literature and Related Work
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Section 2.5: Description of Target User Group and Domain
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Section 2.6: Product Concept and Global Requirements
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                      </div>
                    </div>

                    <h3 id="phase2" ref={phase2}>PHASE 2: <br/> LO-FI PROTOTYPING & USER CONFRONTATIONS</h3>
                    <div style={{padding: "100px 25px 25px 25px"}} className='pro-bodytext'>
                      <em><strong><u className = "stopText" style={{color: "red", fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>STOP!</u></strong></em> <u className = "deliverText" style={{fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>Deliverable Check</u><br/>
                      <p className = "deliverText2" style={{fontSize: "24px", fontFamily: "Inconsolata, monospace", width: "85%"}}>Ensure you have the things shown in the checklist before proceeding to Phase 2. If not please talk/contact the lecturers/TA</p>
                    </div>
                    <div className='pro-bodytext-hex'>
                      <Hexagon2 scrollPosition={goTo} />
                    </div>
                    
                    <div className='pro-bodytext'>
                      <h4 id="empphase2" className='sub-header'>Day 5: Emphatize: Interview Preparation & Plan</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Discuss Feedback on Deliverable 1 with Lecturers & TAs</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Apply Theory to Formulate Interview Questions & Plans to Record Observations</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Create a Plan to Conduct Interviews</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000157"}>Lazar CH 15: Working with Human Subjects</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_479"}>The Art of Game Design CH 28: Playtesting</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.utwente.nl/en/eemcs/research/ethics/"}>Ethics Guidelines EEMCS</a></li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3341713?module_item_id=368518"}>Surveys, Interviews, Focus Groups, & Observations</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3354436?module_item_id=370050"}>Working with Human Subjects: Elements of Ethics </a></li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                        <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#progress2"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Discuss Feedback of Deliverable 1 with Lecturers & TAs</a></Link1>                                
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#interviewques2"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Developing Interview Questions</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#interviewplan2"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Planning of the Interviews</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#interviewmock"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Mock Interviews</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id="progress2" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Discuss Feedback of Deliverable 1 with Lecturers & TAs</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>On <a style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/files/3355484?module_item_id=370126">Canvas</a>  there will be a schedule posted for the group meetings. During this time the Lecturers and TAs will provide feedback about your group's Deliverable 1.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Utilize this opportunity to ask questions and clarify any doubts you may have about where you are at this stage of the project</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>During the meeting come prepared to discuss the following:</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>What are your next steps?</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>How do you plan on working on the feedback/comments?</li>
                          </ul>
                        </ul>
                      </div>

                      <h4 id = "interviewques2" style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 2: Developing Interviews Questions</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In this activity, you will be formulating your interview questions</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Write down the list of research questions (sub-questions as well) you should have formulated in the previous weeks</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Based on this and any new findings you may have generate a list of interview questions you can ask your target group to arrive at the responses you will require</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Use the materials discussed in the lecture session to help formulate your questions</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Check the resources linked below to help developing interview questions</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Interview Checklist: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://github.com/18F/ux-guide/blob/main/_pages/resources/interview-checklist.md/">Link</a> (Reference: 18F UX-Guide)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>UX Research Interview Questions: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://xd.adobe.com/ideas/process/user-research/user-interview-questions-ux-research/">Link</a> (Reference: Adobe XD)</li>
                        </ul>
                      </div>

                      <h4 id = "interviewplan2" style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 3: Planning of the Interviews</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In this activity, you will start thinking about the plan you will follow on the day of the interview and the things you will need to keep in mind before and on the day of the interviews</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Make sure you contact the user you want to interview in advance so you can set an appointment</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>When contacting them ensure you provide enough information/context why you are interviewing them</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Ensure you are following the EEMCS ethical guidelines when contacting the users (Find link below)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>On the day of the interview ensure you have sufficient copies of the information brocheure & consent forms printed out for the users you will be interviewing (Find links below)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Determine how you will be recording the responses of the users.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>If you are recording any data that will help identify the users (Personal Identifiable Information) (like audio, video etc.) ensure you have a plan in place to anonymize their identity and let the users know about this as well.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Create a sample script that you will follow to conduct the interview. (Find resource below)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>The interview responses will be analyzed in the next step, which will then be followed by another round of updating and making your user and technology domains for specific</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Ensure you have a plan in place to help with the analysis of the questions to gain more insights from your user domain</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Check the resources linked below to help with your interview planning activity</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>EEMCS Ethics Guidelines: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.utwente.nl/en/eemcs/research/ethics/">Link</a> (Reference: EEMCS University of Twente)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Information Brocheure & Informed Consent Form (English): <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/files/3342198?module_item_id=368636">Link</a></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Information Brocheure & Informed Consent Form (Dutch): <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/files/3342197?module_item_id=368635">Link</a></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>More Ethics Materials and FAQ: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/pages/2022-wk-3-ethics-materials-faq-and-application-excerpt-ethics-committee-computer-and-information-science-ec-cis?module_item_id=369770">Link</a></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Interview Sample Script/Procedure to Follow: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://github.com/18F/ux-guide/blob/main/_pages/resources/interview-checklist.md/">Link</a> (Reference: 18F UX-Guide)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>UX Research Tools Map: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://global-uploads.webflow.com/59ace8427353c50001765cbd/60d20b8dbb62405deb641ba2_2021-uxr-tools-map.pdf">Link</a> (Reference: User Interviews)</li>
                        </ul>
                      </div>

                      <h4 id = "interviewplan2" style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 4: Mock Interviews</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Once you have your questions and plans in plae you will then pilot test your interview questions & procedures by trying them out on your TAs or group-mates</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>The aim of this activity is to find any potential issues with your questions and approach in interviewing your user domain</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Below you will find the steps for the activity</li>
                        </ul>
                        <br/>
                        <u>Steps</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>This exercise should not take more than 30 minutes. Show ensure you plan everything accordingly</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Step 1: Determine the roles:</li>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>1 person will take the role of the interviewer</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>1 person will take the role of the interviewee</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>1-2 persons will take notes on the responses/feedback provided/mistakes in the procdeure followed</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Remaining will observe</li>
                            </ul>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Step 2: Follow the interview plans you have devised</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Step 3: When asking the questions the peple observing or taking notes must keep track of questions that sound close-ended, biases, parts where a follow up question might have been missed, forced the interviwee to respond in a close-ended form etc.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Step 4: Discuss the issues recorded with the group</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Step 5: Edit your interview questions</li>
                        </ul>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="emp2phase2" className='sub-header'>Day 6: Emphatize: Interview Analysis</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Compile and Document User Responses</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Ensure the Data is Stored in Accordance with Ethical Guidelines</li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Analyze the Interview Data to Gain More Insights</li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000157"}>Lazar CH 15: Working with Human Subjects</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_479"}>The Art of Game Design CH 28: Playtesting</a></li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3341713?module_item_id=368518"}>Surveys, Interviews, Focus Groups, & Observations</a></li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                        <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#intqual"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Analysis of Interview Responses</a></Link1>                                
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id="intqual" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Analysis of Interview Responses</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>By now you should have a compilation of response or are still in the process conducting emphatizing interviews with your selected target group</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Most of the responses you would have collected would be related to your users' opinons on the various problems you have identified related to their associated field of expertise</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>To get meaningful insights from their responses you will have to analyze their responses, in other words conduct a qualitative analysis</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>One way to conduct a qualitative analysis of your response is to conduct a thematic coding</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>There are multiple ways you can approach a thematic coding exercise. As long as the objectives to form themes from the response is central to method the methods you use to analyze the responses can differ</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Below we have provided some resources that you can use to help you conduct your thematic coding</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Example of Thematic Coding with Images: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.katiemccurdy.com/work/childrens/">Link</a> (Reference: Katie McCurdy)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Thematic Analysis: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.nngroup.com/articles/thematic-analysis/">Link</a> (Reference: NN Group)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>How to do a Thematic Analysis of User Interviews?: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.interaction-design.org/literature/article/how-to-do-a-thematic-analysis-of-user-interviews">Link</a> (Reference: Interaction Design)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Thematic Analysis for UX: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.toptal.com/designers/ux-research/thematic-analysis-for-ux">Link</a> (Reference: Toptal)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Analyze Interview Transcripts in Qualitative Research: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.rev.com/blog/transcription-blog/analyze-interview-transcripts-in-qualitative-research">Link</a> (Reference: Rev)</li>
                        </ul>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="defphase2" className='sub-header'>Day 6: Define: Refined Problem</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Refine Existing Research Questions/Statments after Analyzing Interview Responses</li>
                          </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000157"}>Lazar CH 15: Working with Human Subjects</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_479"}>The Art of Game Design CH 28: Playtesting</a></li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3341713?module_item_id=368518"}>Surveys, Interviews, Focus Groups, & Observations</a></li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                        <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#refinedef"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Refine Research Questions</a></Link1>                                
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id="refinedef" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Refine Research Questions</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Once you have conducted the thematic coding of the interview reponses, you would may have derived new insights about your user and technology domains</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Use the new found insights to further refine your research questions/sub-questions</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>If you have any questions on how to approach this approach the lecturers/TA</li>
                        </ul>
                      </div>                      
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="ideaphase2" className='sub-header'>Day 6: Ideate: Refined Concept</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Refine Product Concept Based on New Insights</li>
                          </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000157"}>Lazar CH 15: Working with Human Subjects</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_479"}>The Art of Game Design CH 28: Playtesting</a></li>
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3341713?module_item_id=368518"}>Surveys, Interviews, Focus Groups, & Observations</a></li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                        <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#refineidea"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Refine Product Concept</a></Link1>                                
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id="refineidea" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Refine Product Concept</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Once you have conducted the thematic coding and refining the research questions, it is time to refine your product concept</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>To refine your product concept, ensure you have a proper understanding of your target user domain and the problems you have identified</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Use this information and describe how your product concept will help users achieve the necessary experiences to traget the identified problems</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Also, ensure to describe the role your selected technology will play to achieve the necessary user experience</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>All of this information will help build your Lo-Fi Prototypes next week</li>
                        </ul>
                      </div>                
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="protophase2" className='sub-header'>Day 7: Prototype: Lo-Fi Prototype of Key Interactions</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Apply Theory to Identify Key-Interactions</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Apply Theory to Devise Meaningful Lo-Fi Prototypes</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Create a Lo-Fi Prototype</li>
                          </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000108"}>Lazar CH 10: Usability Testing</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B978012805390400011X"}>Lazar CH 11: Analyzing Qualitative Data</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.youtube.com/watch?v=AjFulCZglYo"}>Video: The Power of Prototyping</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/pages/2022-wk-4-links-heuristics?module_item_id=371200"}>Heuristics Links</a></li>
                            </ul>                            
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3367992?module_item_id=371501"}>Usability Testing, Prototypes, and Analyzing Qualitative Data</a></li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                        <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#protolofi"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Creating a Lo-Fi Prototype</a></Link1>                                
                              </li>
                              {/* <li>
                                <Link1 className='projectLink1' smooth to={"#lofiplan"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Developing a Plan for User Confrontations with Lo Fi Prototype</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#ethicslofi"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Fill Out the Ethics Checklist for Lo-Fi User Confrontation</a></Link1>
                              </li> */}
                              
                            </ul>
                        </div>
                      </div>
                      <h4 id="protolofi" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Creating a Lo-Fi Prototype</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>At this stage of the project you should have a good foundation (background research and user interviews) regarding the problem you are trying to target for your selected user domain.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Your next step is to develop a Lo-Fi prototype that captures the essence of your final product.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>You will take this Lo-Fi prototype and interview the users once more to get insights that will help refine the user experience.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Depending on your user domain and the technology domain you plan on using, select one of the following design thinking toolkits to help you generate the necessary lo-fi prototype</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>If you have any questions/doubts reach out to one of the assigned TAs or the lecturers.</li>
                        </ul>
                        <u>Lo-Fi Prototype Methods Cards:</u> 
                        <br/>
                        <br/>
                        Click the images to learn more about the various lo-fi prototype methods!
                        <br/>
                        <div style={{width: "80vh", display: "flex", flexDirection: "row", paddingTop: "5vh", padding: "1vh"}}>
                          <a href={"https://toolkits.dss.cloud/design/method-card/clickable-prototype-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={click} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/harris-profile/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={harris} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/navigation-map-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={navi} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/paper-prototyping-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={paper} /></a>
                        </div>
                        <div style={{width: "80vh", display: "flex", flexDirection: "row", paddingTop: "5vh", padding: "1vh"}}>
                          <a href={"https://toolkits.dss.cloud/design/method-card/storyboard-2/"} target="_blank"><img style={{width: "10vh", height: "10vh", paddingRight: "5px"}} src={story} /></a>
                        </div>
                        <br/>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Prototyping 101: Difference Between Low-Fidelity & High-Fidelity Prototypes: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://blog.adobe.com/en/publish/2017/11/29/prototyping-difference-low-fidelity-high-fidelity-prototypes-use">Link</a> (Reference: Adobe)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>5 Common Low-Fidelity Prototypes & Their Best Practices: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.interaction-design.org/literature/article/prototyping-learn-eight-common-methods-and-best-practices">Link</a> (Reference: Interaction Design)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Reading 8: Prototyping: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="http://web.mit.edu/6.813/www/sp17/classes/08-prototyping/">Link</a> (Reference: MIT)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>What is Low Fidelity Prototype? Types and Examples: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.youtube.com/watch?v=9prHhPy17So">Link</a> (Reference: Club UX)</li>
                        </ul>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id="testphase2" className='sub-header'>Day 8: Test: User Confrontations & Testing</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Develop a Plan for Lo-Fi User Confrontations</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Complete Ethics Checklist for Lo-Fi User Confrontation</li>
                          </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000108"}>Lazar CH 10: Usability Testing</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B978012805390400011X"}>Lazar CH 11: Analyzing Qualitative Data</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.youtube.com/watch?v=AjFulCZglYo"}>Video: The Power of Prototyping</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/pages/2022-wk-4-links-heuristics?module_item_id=371200"}>Heuristics Links</a></li>
                            </ul>                            
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3367992?module_item_id=371501"}>Usability Testing, Prototypes, and Analyzing Qualitative Data</a></li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                        <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#lofiplan"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Developing a Plan for User Confrontations with Lo Fi Prototype</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#ethicslofi"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Fill Out the Ethics Checklist for Lo-Fi User Confrontation</a></Link1>
                              </li>
                              
                            </ul>
                        </div>
                      </div>
                      <h4 id = "lofiplan" style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Developing a Plan for User Confrontations with Lo Fi Prototype</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Like creating a plan for user interviews, ensure you have a plan in place that would allow you to test your Lo-Fi prototype with users.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Make sure you contact the user you want in advance so you can set an appointment</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>When contacting them ensure you provide enough information/context why you are conducting the study with the lo-fi prototype</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Ensure you are following the EEMCS ethical guidelines when contacting the users (Find link below)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>On the day of the study ensure you have sufficient copies of the information brocheure & consent forms printed out for the users you will be interviewing (Find links below)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Determine how you will be recording the responses of the users.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>If you are recording any data that will help identify the users (Personal Identifiable Information) (like audio, video etc.) ensure you have a plan in place to anonymize their identity and let the users know about this as well.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Create a sample script that you will follow to conduct the study. (Find resource below)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>The responses should be analyzed, which will then be followed by another round of updating and making your user and technology domains for specific</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Ensure you have a plan in place to help with the analysis of the questions to gain more insights from your user domain</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Check the resources linked below to help with your interview planning activity</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Check the resources linked below to help developing a plan to conduct your user confrontations.</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>EEMCS Ethics Guidelines: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://www.utwente.nl/en/eemcs/research/ethics/">Link</a> (Reference: EEMCS University of Twente)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Interview Checklist: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://github.com/18F/ux-guide/blob/main/_pages/resources/interview-checklist.md/">Link</a> (Reference: 18F UX-Guide)</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>UX Research Interview Questions: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://xd.adobe.com/ideas/process/user-research/user-interview-questions-ux-research/">Link</a> (Reference: Adobe XD)</li>
                        </ul>
                      </div>

                      <h4 id = "ethicslofi" style={{fontWeight: "100", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 2: Fill Out the Ethics Checklist for Lo-Fi User Confrontation</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Before you start your lo-fi user confrontations ensure you run your plan by either the TA assigned to you or one of the lecturers.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>After that fill out the ethics checklist (links provided below) and submit it to one of the lecturers before the start of your lo-fi study.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Once you get the approval from the lecturers you can start your lo-fi prototype study</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Ethics Checklist for Lo-Fi User Confrontation: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/files/3361749?module_item_id=370845">Link</a></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Information Brocheure & Informed Consent Form for Lo-Fi User Confrontations (English): <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/files/3361751?module_item_id=370847">Link</a></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Information Brocheure & Informed Consent Form for Lo-Fi User Confrontations (Dutch): <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/files/3361750?module_item_id=370846">Link</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 className='sub-header'>Phase 2: Deliverable Checklist</h4>
                      <div className='check-box'>

                        <label class="container">Chapter 2: Context Analysis and Concept
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Section 2.4: Context Analysis: Interviews and Observations
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Section 2.5: Description of Target User Group and Domain (Updated)
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Section 2.6: Product Concept and Global Requirements (Updated)
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Chapter 3: Design and Evaluation of Lo-fi Prototype(s) and Revised Product Concept
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Section 3.1: Lo-Fi Prototypes
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Section 3.2: Revised Product Concept and Requirements
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                      </div>
                    </div>
                    
                    <h3 id="phase3" ref={phase3}>PHASE 3: <br/> HI-FI PROTOTYPING & PREPARATION OF RESEARCH STUDY</h3>
                    <div style={{padding: "100px 25px 25px 25px"}} className='pro-bodytext'>
                      <em><strong><u className = "stopText" style={{color: "red", fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>STOP!</u></strong></em> <u className = "deliverText" style={{fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>Deliverable Check</u><br/>
                      <p className = "deliverText2" style={{fontSize: "24px", fontFamily: "Inconsolata, monospace", width: "85%"}}>Ensure you have the things shown in the checklist before proceeding to Phase 3. If not please talk/contact the lecturers/TA</p>
                    </div>
                    <div className='pro-bodytext-hex'>
                      <Hexagon3 scrollPosition={goTo}/>
                    </div>
                    
                    <div className='pro-bodytext'>
                      <h4 id="protophase3" className='sub-header'>Days 9-12: Prototype: Hi-Fi Prototype</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Understand Underlying Design Principles, Heuristics, & Guidelines</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Preliminary Description of Prototype and Interaction</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Preliminary Diagrams of the System</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Preliminary Content of the Application</li>
                          </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000029"}>Lazar CH2: Experimental Research</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 3: Making Research</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_549"}>The Art of Game Design CH33: Games Transform their Players</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/pages/2022-wk-5-materials-two-tognazzini-sources?module_item_id=372613"}>Tognazzini Sources</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://simonwallner.at/ext/fitts/"}>Fitts Test</a></li>
                            </ul>                            
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3382253?module_item_id=372935"}>Prototypes & Usability Testing</a></li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#protodesc"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Creating the Description of Hi-Fi Prototype & Interaction</a></Link1>                                
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#protodia"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Creating Diagrams of your System</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#protocontent"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Creating Content for your Application</a></Link1>
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#protoresources"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Browse List of Resources to Develop Hi-Fi Prototype</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>

                      <h4 id="protodesc" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Creating the Description of Hi-Fi Prototype & Interaction</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>At this stage of the project you should have a good understanding of what your users think about your Low-Fidelity prototype.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Based on their input you will now have to create a description of your hi-fi prototype and the various interactions involved in your user experience.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Below you can find a list (not comprehensive) of topics to keep in mind when writing down the description.</li>
                        </ul>
                        <u>List of Points to Keep in Mind when Developing the Description of your Hi-Fi Prototype:</u> 
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Hardware Description (Select whichever applicable)</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Description of materials used to create the structure or base to support/house the various components and the reasoning behind their selection.</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Description of the various components that will be used to build the hardware, to what capacity they will be used and the reasoning behind their selection.</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Decription of limitations if any.</li>
                          </ul>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Software Description (Select whichever applicable)</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Description of the various software packages/languages you will be using to develop the software aspect of your prototype and the reasoning behing their selection.</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Description of the how communication between sensors and devices is established.</li>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Decription of limitations if any.</li>
                          </ul>
                        </ul>
                      </div>

                      <h4 id="protodia" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 2: Creating Diagrams of your System</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Once you have created a description of all the hardware and software aspects of your prototype the next step is to create relevant diagrams of your system.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>For hardware side of the prototype, If applicable, these could be prototype design mockups/actual images, wiring diagrams, assembly instructions, usage instructions etc.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>For software side of the prototype, If applicable, these could be program flow charts, desgn mockup/actula images of the software interfaces etc.</li>
                        </ul>
                      </div>

                      <h4 id="protocontent" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 3: Creating Content for your Application</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>After completing the previous activites it is time for you to focus on creating/refining how/what/when the content for your application is presented to your user group.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Utilize the information you gathered during the various emphatize and testing phases of your project to make a decision about this.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Once you have done that, explain in detail using images/illustrations your choices and the reasons behind those choices.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>With that also indicate the intended effect you hope your intervention will have on your user group.</li>
                        </ul>
                      </div>

                      <h4 id="protoresources" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 4: Browse List of Resources to Develop Hi-Fi Prototype</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Android</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://developer.android.com/design/index.html"}>Android Design Guide</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>General design patterns and best practices for Android apps.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://www.google.com/design/spec/material-design/introduction.html"}>Android Material Design Language</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Walkthrough of Android's new "Material Design" style, from high-level principles to detailed examples.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.learnui.design/blog/ios-vs-android-app-ui-design-complete-guide.html"}>Android & iOS Design Guide</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Guide comparing common design patterns and best practices for both Android and iOS apps.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://developer.android.com/develop/index.html"}>Android Developers Homepage</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Tutorials, documentation, and sample code for Android developers.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://guides.codepath.com/android/Beginning-Android-Resources"}>CodePath Android Course</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>A guide to Android written by CodePath</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://guides.codepath.com/android/Beginning-Android-Resources"}>Stack Overflow - Android</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>The Android section of Stack Overflow, a popular question-and-answer platform for coders. Search and ask away!</li></ul>
                          </ul>

                          <li style={{fontFamily: "Inconsolata, monospace"}}>iOS</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/"}>iOS UI Design Guide</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Design principles and best practices for iOS apps.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://developer.apple.com/design/tips/"}>iOS UI Design Dos and Don'ts</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Simple illustrated guide for basic iOS design principles. </li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://developer.apple.com/design/tips/"}>Apple iOS Developer Center</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Tutorials, documentation, and sample code for iOS developers.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://codewithchris.com/how-to-make-iphone-apps-with-no-programming-experience/"}>How to make iPhone apps with no programming experience</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Great beginner's guide to making iPhone apps.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://stackoverflow.com/questions/tagged/ios"}>Stack Overflow - iOS</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>The iOS section of Stack Overflow, a popular question-and-answer platform for coders. Search and ask away!</li></ul>
                          </ul>

                          <li style={{fontFamily: "Inconsolata, monospace"}}>Web</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://getbootstrap.com/"}>Bootstrap</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Popular HTML/CSS/JS framework. Offers nice, modern (but arguably generic) UI elements and animations.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://foundation.zurb.com/"}>Foundation</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Another popular front-end framework. Great for apps that need to be responsive (different layouts on different platforms).</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://www.google.com/fonts"}>Google WebFonts</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Massive collection of free fonts to download or add to your web page.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://hellohappy.org/beautiful-web-type/"}>Beautiful Web Type</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>A curation of some of the best fonts from Google WebFonts.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://d3js.org/"}>D3.js</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>A JavaScript library for manipulating webpages based on data. Popular for data visualization / interactive infographics.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://daneden.github.io/animate.css/"}>Animate.css</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Simple animations done only using CSS.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://www.codecademy.com/en/tracks/web"}>Codecademy - HTML and CSS</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Complete beginner's guide to building web pages with HTML and CSS.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://jstherightway.org/"}>JS The Right Way</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Fantastic beginner's guide to coding in JavaScript.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://nodejs.org/"}>Node.js</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Server-side JavaScript framework and runtime. Get a web server running with 6 lines of code.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://nodeschool.io/#workshoppers"}>Node School</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Interactive walkthroughs help you code your first Node.js application.</li></ul>
                          </ul>

                          <li style={{fontFamily: "Inconsolata, monospace"}}>Prototyping</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "0rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.figma.com/"}>Figma</a></li>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "0rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://www.invisionapp.com/"}>InVision</a></li>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "0em"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://proto.io/"}>Proto.io</a></li>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "0rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://fritzing.org/"}>Fritzing</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Application to test/troubeshoot your breadboard/sensor assemblies.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.4rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://dribbble.com/"}>Dribbble </a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Popular amongst designers showing snippets of their work</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.4rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://pttrns.com/"}>Pttrns </a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Catalog of screenshots showcasing the UI of released apps</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.4rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://practicaltypography.com/"}>Butterick's Practical Typography</a></li>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "0rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://www.kaikkonendesign.fi/typography/"}>Interactive Guide to Blog Typography</a></li>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "0rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://color.adobe.com/create/color-wheel/?copy=true&base=2&rule=Analogous&selected=2&name=Copy%20of%20Birdfolio%20Blues&mode=rgb&rgbvalues=0.9205880000000001,0.42626880519764604,0.6181146166454948,0.7418559462941582,0.4447903937996111,0.960588,0.44664621944518973,0.5210531384435333,0.870588,0.4447903937996111,0.912490052237982,0.960588,0.4067953288629323,0.9205880000000001,0.5680549854063908&swatchOrder=0,1,2,3,4"}>Adobe Color</a></li>
                          </ul>

                          <li style={{fontFamily: "Inconsolata, monospace"}}>Backend Server</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://firebase.google.com/docs/android/setup"}>Firebase for Android</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Guide to help get Firebase (Server to track and maintain backend related functions of application/website) setup for Android</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://getbootstrap.com/"}>Firebase for iOS</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Guide to help get Firebase setup for iOS</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://getbootstrap.com/"}>Firebase for Web</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Guide to help get Firebase setup for Webiste</li></ul>
                          </ul>
 
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Hardware & Electronics</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.hackster.io/"}>Hackster IO</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Arudino Projects</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://getbootstrap.com/"}>EEVblog</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Electronics Engineering Video Blog</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.electromaker.io/blog/article/best-maker-youtube-channels-to-follow"}>Various Maker Space Blogs/Youtube Channels</a></li>
                          </ul>

                          <li style={{fontFamily: "Inconsolata, monospace"}}>Testing & Debugging</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://firebase.google.com/docs/test-lab/"}>Android Device Testing</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Test your app on devices hosted in a Google data center</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://www.browserstack.com/responsive"}>Responsive Design Testing</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Paste in a URL, generate a screenshot of your web app layout on any device or screen size.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://developer.android.com/topic/libraries/testing-support-library/index.html"}>Android Testing</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Testing your Android App using the Testing Framework</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://developer.android.com/tools/debugging/index.html"}>Android Debugging</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>How to test and debug your Android app.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://developer.apple.com/support/technical/debugging/"}>iOS Debugging</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>How to test and debug your iOS app.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://developer.chrome.com/devtools/docs/javascript-debugging"}>JavaScript Debugging in Chrome</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>How to test and debug your JavaScript in Chrome.</li></ul>
                          </ul>

                        </ul>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id = "testphase3" className='sub-header'>Day 13: Test: Experimental Testing</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Create the Evaluation Plans for your Pilot Study/User Confrontation</li>
                          </ul>
                        </div>

                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000030"}>Lazar CH3: Experimental Design</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000042"}>Lazar CH4: Statistical Analysis</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 4: Making Research</a></li>
                            </ul>                            
                        </div>
                      </div>

                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3394589?module_item_id=374240"}>Video Prototyping & Experimental Research</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3412709?module_item_id=376275"}>Study Design, Statistics, and Measuring Success</a></li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#testplan"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Creating a Plan for Evaluating your Hi-Fi Prototype and User Experience</a></Link1>                                
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#testethics"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Fill Out the Ethics Checklist for Lo-Fi User Confrontation</a></Link1>                                
                              </li>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#testques"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Example List of Standardized/Scientific Questionnaires</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>

                      <h4 id="testplan" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Creating a Plan for Evaluating your Hi-Fi Prototype and User Experience</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                      <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Like creating a plan for lo-fi prototype user confrontations, ensure you have a plan in place that would allow you to test your Hi-Fi prototype with users.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Make sure you have a working prototype beofre you conduct you user study and know exactly what you are trying to measure during the user confrontation</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Note: Ensure that your study includes questionnaire/questions that will help you evaluate the effectiveness of the system you developed. Below you will find a list of example questionnaires that might help you achieve this objective.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Refer the section <Link1 className='projectLink1' smooth to={"#lofiplan"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Developing a Plan for User Confrontations with Lo Fi Prototype</a></Link1> for remaining tips/notes.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Refer to the Design Method Toolkit (Links posted across the website and in the manual) to select an appropriate method to test/evaluate your prototype</li>
                        </ul>
                      </div>

                      <h4 id="testplan" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 2: Fill Out the Ethics Checklist for Lo-Fi User Confrontation</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Before you start your hi-fi user confrontations ensure you run your plan by either the TA assigned to you or one of the lecturers.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>After that fill out the ethics checklist (links provided below) and submit it to one of the lecturers before the start of your hi-fi study.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Once you get the approval from the lecturers you can start your hi-fi prototype study</li>
                        </ul>
                        <br/>
                        <u>Helpful Resources</u>
                        <br/>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Ethics Checklist for Hi-Fi User Confrontation: <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/files/3361749?module_item_id=370845">Link</a></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Information Brocheure & Informed Consent Form for Hi-Fi User Confrontations (English): <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/files/3412389?module_item_id=376189">Link</a></li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Information Brocheure & Informed Consent Form for Hi-Fi User Confrontations (Dutch): <a target="_blank" style={{fontFamily: "Inconsolata, monospace"}} href="https://canvas.utwente.nl/courses/11018/files/3412388?module_item_id=376188">Link</a></li>
                        </ul>
                      </div>

                      <h4 id="protoresources" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 3: Browse List of Resources to Develop Hi-Fi Prototype</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Example of Questionnaires that Evaluate User Experience</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://link.springer.com/chapter/10.1007/978-3-322-80058-9_19"}>AttrakDiff</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>AttrakDiff is a standardized test that evaluates the user’s experience.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.ueq-online.org/"}>UEQ</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Questionnaire to measure the User Experience of interactive products.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://mecue.de/english/home.html"}>meCUE</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Questionnaire, which focuses on the modular acquisition of user-centered reviews and their experience of interactive technical products.</li></ul>
                            
                          </ul>

                          <li style={{fontFamily: "Inconsolata, monospace"}}>Example of Questionnaires that Evaluate Usability</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html"}>SUS</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Scale for administering after usability tests.</li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://uiuxtrend.com/pssuq-post-study-system-usability-questionnaire/"}>PSSUQ</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Questionnaire to measure users’ perceived satisfaction of a website, software, system or product at the end of a study.</li></ul>
                          </ul>

                          <li style={{fontFamily: "Inconsolata, monospace"}}>Example of Questionnaires that Evaluate Usability</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.jstor.org/stable/30036540#metadata_info_tab_contents"}>UTAUT Model</a></li>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-0.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://uxpajournal.org/tam-formats-effect-response-labels-order/#:~:text=The%20TAM%20questionnaire%20is%20made,experience%20of%20its%20actual%20use."}>TAM</a></li>
                          </ul>

                          <li style={{fontFamily: "Inconsolata, monospace"}}>Example of Questionnaires that Evaluate Trust</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8562383/"}>Measurement of Trust in Automation: A Narrative Review and Reference Guide</a></li>
                          </ul>

                          <li style={{fontFamily: "Inconsolata, monospace"}}>Example of Other Relevant Questionnaires</li>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://dl.acm.org/doi/10.1145/3549507"}>miniPXI</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Eleven-item measure of the popular Player Experience Inventory </li></ul>
                            <li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://web-archive.southampton.ac.uk/cogprints.org/7026/1/Harms_04_reliability_validity_social_presence_(Biocca).pdf"}>Internal Consistency and Reliability of the Networked Minds</a></li>
                              <ul class= 'ul-style'><li style={{fontFamily: "Inconsolata, monospace", marginTop: "-1.5rem"}}>Measure of Social Presence</li></ul>
                          </ul>
                        </ul>
                      </div>
                    </div>

                    <div className='pro-bodytext'>
                      <h4 id = "test2phase3"  className='sub-header'>Day 14: Test: User Confrontations</h4>
                      
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Objectives:</u>
                          <ul class= 'ul-style'>
                            <li style={{fontFamily: "Inconsolata, monospace"}}>Conduct the Pilot Study to Test the Intervention you Created</li>
                          </ul>
                        </div>

                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Required Reading: </u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000030"}>Lazar CH3: Experimental Design</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.sciencedirect.com/science/article/pii/B9780128053904000042"}>Lazar CH4: Statistical Analysis</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 4: Making Research</a></li>
                            </ul>                            
                        </div>
                      </div>

                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                            <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3394589?module_item_id=374240"}>Video Prototyping & Experimental Research</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3412709?module_item_id=376275"}>Study Design, Statistics, and Measuring Success</a></li>
                            </ul>
                        </div>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#teststudy"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Conduct Pilot Study</a></Link1>                                
                              </li>
                            </ul>
                        </div>
                      </div>
                      
                      <h4 id="testplan" style={{fontWeight: "500", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Activity 1: Conduct Pilot Study</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                      <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Before you start your study you have a plan in place. Refer to the tips provided above and discussed during the tutorials.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Ensure your plan follows ethically validated procedures and was checked by one of the lecturers.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Last but not the least conduct your study!</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Once you have completed your study store your data securely and start the analysis of your data. Note down all your insights and discuss them in your report</li>
                        </ul>
                      </div>                      
                    </div>

                    <div className='pro-bodytext'>
                      <h4 className='sub-header'>Phase 3: Deliverable Checklist</h4>
                      <div className='check-box'>

                        <label class="container">Chapter 1: Introduction (Updated)
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Chapter 4: Design of Final Hi-Fi Prototype
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Chapter 5: Evaluation – Plan for Experimental Research Study (
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Section 5.1: Evaluation plans 
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Section 5.2: Pilot Study
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>

                        <label class="container">Chapter 6: Discussion 
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>


                    {/* <h3 id="phase4" ref={phase4}>PHASE 4: <br/> FINAL DELIVERABLES & ORAL ASSESSMENT MEETING</h3>
                    <div style={{padding: "100px 25px 25px 25px"}} className='pro-bodytext'>
                      <em><strong><u className = "stopText"  style={{color: "red", fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>STOP!</u></strong></em> <u className = "deliverText" style={{fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>Deliverable Check</u><br/>
                      <p className = "deliverText2" style={{fontSize: "24px", fontFamily: "Inconsolata, monospace", width: "85%"}}>Ensure you have the things shown in the checklist before proceeding to Phase 4. If not please talk/contact the lecturers/TA</p>
                    </div>
                    <div className='pro-bodytext-hex'>
                      <Hexagon4 scrollPosition={goTo}/>
                    </div> */}
                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
                      <h4 id = "protophase4" className='sub-header'>Prototype: Oral Reflection</h4>
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
                    </div> */}
                    

                    {/* <div className='pro-bodytext'>
                      <h4 id = "testphase4" className='sub-header'>Test: Demo Market</h4>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
                      <h4 id = "test2phase4" className='sub-header'>Test: Final Submission</h4>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}
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