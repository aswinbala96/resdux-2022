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
                    <h3 id="phase1" ref={phase1}>PHASE 1: <br/> CONTEXT ANALYSIS, PRELIMINARY ANALYSIS & IDEATION</h3>
                    <div className='pro-bodytext-hex' >
                      <Hexagon1 scrollPosition={goTo} />
                      {/* <h4 value = {word} style={{display: "block"}}>{word}</h4> */}
                    </div>
                    <div className='pro-bodytext'>
                      <h4 id="empphase1" className='sub-header'>Emphatize: Context Analysis Part 1</h4>
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
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://canvas.utwente.nl/courses/11018/files/3330974?module_item_id=366594"}>Reader PT 1: Research and Design of UX</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process"}>Stages in Design Thinking Process</a></li>
                              <li style={{fontFamily: "Inconsolata, monospace"}}><a className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}} target={"_blank"} href={"http://ezproxy2.utwente.nl/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=2225867&site=ehost-live&ebv=EB&ppid=pp_73"}>The Art of Game Design CH7: "Ideas"</a></li>
                              
                            </ul>
                        </div>
                      </div>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Literature & Related Work</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "0vh"}}>
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
                              <li>
                                <Link1 className='projectLink1' smooth to={"#matrix"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Develop the Matrix</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id="userdom" style={{fontWeight: "1000", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Identify List of User Domains</h4>
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

                      <h4 id="techdom" style={{fontWeight: "1000", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Identify List of Technology Domains</h4>
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

                      <h4 id="litreview" style={{fontWeight: "1000", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Conduct literature Review</h4>
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

                      <h4 id="matrix" style={{fontWeight: "1000", borderBottom: "1px solid darkgrey", width:"fit-content", paddingTop: "15px"}}>Develop the Matrix</h4>
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
                    </div>

                    <div id="emp2phase1" className='pro-bodytext'>
                      <h4 className='sub-header'>Emphatize: Context Analysis Part 2</h4>
                      <div className='pro-bodytext' style={{display: "flex", width: "70%", width:"fit-content"}}>
                        <div style={{flex: 1, paddingRight: "0vh"}}>
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
                        <div style={{paddingRight: "5vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Literature & Related Work</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: "0vh"}}>
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Activities to Do!</u>
                          <ul class= 'ul-style'>
                              <li>
                                <Link1 className='projectLink1' smooth to={"#furtheremp"}> <a target="_blank" className='textHover' style={{fontFamily: "Inconsolata, monospace", cursor: "pointer", color: "#1228e2"}}>Further Analyse the User and Technology Domain</a></Link1>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <h4 id="furtheremp" style={{fontWeight: "1000", borderBottom: "1px solid darkgrey", width:"fit-content"}}>Further Analyse the User and Technology Domain</h4>
                      <div style={{paddingLeft:"25px", paddingTop: "10px"}}>
                        <ul class= 'ul-style'>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>In this activity you will conduct another round of emphatizing, but this time using other methods of design to obtain richer insights about the selected user and technology domain.</li>
                          <li style={{fontFamily: "Inconsolata, monospace"}}>Below we have shortlisted few emphatize methods you could use to conduct the activity.</li>                                                                      
                        </ul>
                        <u>Design Methods: Emphatize</u> 
                        <br/>
                        <br/>
                        Click the images to learn more about the various emphatizing method!
                        <br/>
                        <div style={{width: "600px", display: "flex", flexDirection: "row"}}>
                          <a href={"https://toolkits.dss.cloud/design/method-card/day-in-the-life/"} target="_blank"><img style={{width: "20vh", height: "20vh", paddingRight: "10px"}} src={dayMap} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/cognitive-map-2/"} target="_blank"><img style={{width: "20vh", height: "20vh", paddingRight: "10px"}} src={cogMap} /></a>
                          <a href={"https://toolkits.dss.cloud/design/method-card/research-collage/"} target="_blank"><img style={{width: "20vh", height: "20vh", paddingRight: "10px"}} src={resCol} /></a>
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
                    </div>
                    
                    {/* <div className='pro-bodytext'>
                      <h4 id="defphase1" className='sub-header'>Define: Problem Definition</h4>
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
                          <u style={{fontFamily: "Inconsolata, monospace"}}>Lecture (Reference):</u>
                          <ul class= 'ul-style'>
                              <li style={{fontFamily: "Inconsolata, monospace"}}>Research Questions</li>
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
                    </div> */}

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
                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}
                    
                    <h3 id="phase3" ref={phase3}>PHASE 3: <br/> HI-FI PROTOTYPING & PREPARATION OF RESEARCH STUDY</h3>
                    <div style={{padding: "100px 25px 25px 25px"}} className='pro-bodytext'>
                      <em><strong><u className = "stopText" style={{color: "red", fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>STOP!</u></strong></em> <u className = "deliverText" style={{fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>Deliverable Check</u><br/>
                      <p className = "deliverText2" style={{fontSize: "24px", fontFamily: "Inconsolata, monospace", width: "85%"}}>Ensure you have the things shown in the checklist before proceeding to Phase 3. If not please talk/contact the lecturers/TA</p>
                    </div>
                    <div className='pro-bodytext-hex'>
                      <Hexagon3 scrollPosition={goTo}/>
                    </div>
                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}

                    {/* <div className='pro-bodytext'>
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
                    </div> */}


                    <h3 id="phase4" ref={phase4}>PHASE 4: <br/> FINAL DELIVERABLES & ORAL ASSESSMENT MEETING</h3>
                    <div style={{padding: "100px 25px 25px 25px"}} className='pro-bodytext'>
                      <em><strong><u className = "stopText"  style={{color: "red", fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>STOP!</u></strong></em> <u className = "deliverText" style={{fontSize: "45px", fontFamily: "Inconsolata, monospace"}}>Deliverable Check</u><br/>
                      <p className = "deliverText2" style={{fontSize: "24px", fontFamily: "Inconsolata, monospace", width: "85%"}}>Ensure you have the things shown in the checklist before proceeding to Phase 4. If not please talk/contact the lecturers/TA</p>
                    </div>
                    <div className='pro-bodytext-hex'>
                      <Hexagon4 scrollPosition={goTo}/>
                    </div>
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