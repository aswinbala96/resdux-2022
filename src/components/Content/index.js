import React, { useState } from 'react'
import { ContentSpace, MainPanel, ContentCointainer, SidePanel } from './ContentElements'
import { IoIosArrowRoundBack } from "react-icons/io";
import './content.css';

import Hexagon2 from '../Hexagon2';
import Hexagon3 from '../Hexagon3';
import Hexagon1 from '../Hexagon1';
import ProjectPage from '../../pages/project';

function Content() {
    const [isShown1, setIsShown1] = useState(true)

    const handleClick1 = event => {
        // 👇️ toggle visibility
        setIsShown1(current => !current);
    };

  return (
    <>
        <ContentSpace>
            <ContentCointainer>
                <SidePanel>
                    <h2 class= 'side-header'>Important Dates</h2>
                    <ul class= 'ul-style-con'>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>[24/11]</span>: Exam 1
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>[25/11]</span>: Deliverable 1
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [08/12]
                            </span>: Exam 2
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [09/12]
                            </span>: Deliverable 2
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [17/01]
                            </span>: Exam 3
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [20/01]
                            </span>: Deliverable 3
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [25/01]
                            </span>: Oral Reflection
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [26/01]
                            </span>: Oral Reflection
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [27/01]
                            </span>: Oral Reflection
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [30/01]
                            </span>: Oral Reflection
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [02/02]
                            </span>: Resit
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [03/02]
                            </span>: Demo Market
                        </li>
                    </ul>
                    <h2 class= 'side-header'>Staff Info</h2>
                    <ul class= 'ul-style-con'>
                        <li ><span class = 'highlight'>Dees Postma</span></li>
                        <li><span class = 'highlight'>Champika Ranasinghe</span></li>
                        <li><span class = 'highlight'>Aswin B</span></li>
                        <li><span class = 'highlight-ta'>Sander Dullaert (TA)</span></li>
                        <li><span class = 'highlight-ta'>Gergana Dzhondzhorova (TA)</span></li>
                        <li><span class = 'highlight-ta'>Eva Lahuis (TA)</span></li>
                        <li><span class = 'highlight-ta'>Vanessa Markos (TA)</span></li>
                        <li><span class = 'highlight-ta'>Renske Mulder (TA)</span></li>
                        <li><span class = 'highlight-ta'>Stratos Mytaros (TA)</span></li>
                        <li><span class = 'highlight-ta'>Hannah Ottenschot (TA)</span></li>
                        <li><span class = 'highlight-ta'>Altea Vesta Junio (TA)</span></li>
                    </ul>
                </SidePanel>
                <MainPanel>
                    <div style={{display: "flex", flexDirection: 'column', width: "100%", height: "98%"}}>
                        <div style={{display: isShown1 ? 'none' : 'block', flexDirection: 'column', height: "90%" }}>
                            <div style={{display: "flex"}}>
                                <div onClick={handleClick1} style={{cursor: "pointer", flex: 1}}> 
                                    <IoIosArrowRoundBack/>
                                </div>
                                {/* <div style={{display: "block", flex: 27}}>
                                    <div class = 'phase-bar' style={{height: "5vh"}}>
                                        <div  class = 'phase-1'>
                                            Phase 1
                                        </div>
                                        <div class = 'phase-2'>
                                            Phase 2
                                        </div>
                                        <div class = 'phase-3'>
                                            Phase 3
                                        </div>
                                        <div class = 'phase-4' >
                                            Phase 4
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <ProjectPage/>
                            {/* <div className='proWindow'>
                                <div className='titlebar'>
                                <div className='buttons'>
                                    <div className='close'/>
                                    <div className='minimize'/>
                                    <div className='maximize'/>
                                </div>
                                Project
                                </div>
                                <div className='pro-content'>
                                    <h3>Phase 1</h3>
                                    <div className='pro-bodytext'>
                                        <Hexagon1/>
                                    </div>
                                    <h3>Phase 2</h3>
                                    <div className='pro-bodytext'>
                                        <Hexagon2/>
                                    </div>
                                    <h3>Section 3</h3>
                                    <div className='pro-bodytext'>
                                        <Hexagon3/>
                                    </div>
                                    <h3>Section 3</h3>
                                    <div className='pro-bodytext'>
                                        Each assignment will be graded indvidually
                                    </div>
                                    <h3>Section 3</h3>
                                    <div className='pro-bodytext'>
                                        Each assignment will be graded indvidually
                                    </div>
                                    <h3>Section 3</h3>
                                    <div className='pro-bodytext'>
                                        Each assignment will be graded indvidually
                                    </div>
                                    <h3>Section 3</h3>
                                    <div className='pro-bodytext'>
                                        Each assignment will be graded indvidually
                                    </div>
                                    <div>
                                        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23e1dfe1&ctz=Europe%2FAmsterdam&showTitle=1&showNav=1&showPrint=1&showDate=1&showTz=1&showCalendars=0&src=ZW4uZHV0Y2gjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4" style={{width:"600px", height:"600px", scrolling:"no"}}></iframe>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className = "title-con" style={{flex: 1, backgroundColor: "white", width: "100%", fontFamily: 'Space Mono', fontSize: '19px',  display: isShown1 ? 'block' : 'none'}}>
                            Project Phase Timeline Overview (Click on Various Elements!)
                        </div>
                        {/* alignItems: "center", justifyContent: "center" */}
                        <div style={{flex: 17, backgroundColor: "transparent", width: "100%", display: "flex", display: isShown1 ? 'flex' : 'none'}}>
                            <div style={{display: "flex", flexDirection: "column", width: "100%", height: "80%"}}>
                                <div className= "TTextContainer" style={{flex: 1, display: "flex", backgroundColor: "white", width: "100%", height: "100%", marginRight: "15px", paddingTop: "5px"}}>
                                    <div class="boxesl" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor:'rgba(127, 220, 127, 0.37)'}}>
                                        <div className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "rgb(7, 100, 44)"}}>Context Analysis</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor:'rgba(127, 220, 127, 0.37)'}}>
                                        <div className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "rgb(7, 100, 44)"}}>Ideation</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none', display: "grid"}}>
                                        <div className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "rgb(7, 46, 100)"}}>Lo Fi Protoype</div>
                                    </div>
                                    <div class="boxes" style={{borderRight: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(19, 162, 202, 0.37)"}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(19, 162, 202, 0.37)"}}>
                                        <div className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "rgb(7, 46, 100)"}}>User Confrontations</div>
                                    </div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#fe6993"}}>Hi Fi Protoype</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#fe6993"}}>Research Study Prep</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#fe6993"}}>Research Study Prep</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(127, 50, 215, 0.249)"}}>
                                        <div className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#302aa2"}}>Final Deliverables</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(127, 50, 215, 0.249)"}}>
                                        <div className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#302aa2"}}>Oral Assessment</div>
                                    </div>
                                    <div class="boxesr" style={{border: 'none'}}></div>
                                </div>
                                <div className= "TlineContainer" style={{flex: 0.2, display: "flex", backgroundColor: "white", width: "100%", height: "100%", marginRight: "15px", paddingTop: "5px"}}>
                                    <div class="boxesl" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor:'rgba(127, 220, 127, 0.37)'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor:'rgba(127, 220, 127, 0.37)'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderRight: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(19, 162, 202, 0.37)"}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(19, 162, 202, 0.37)"}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none',borderColor: "rgba(254, 105, 147, 0.1)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(127, 50, 215, 0.249)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(127, 50, 215, 0.249)"}}></div>
                                    <div class="boxesr" style={{border: 'none', color: "white"}}>.</div>
                                </div>
                                <div class = 'phase-bar'>
                                    <div onClick={handleClick1} class = 'phase-1'>
                                        Phase 1
                                    </div>
                                    <div class = 'phase-2'>
                                        Phase 2
                                    </div>
                                    <div class = 'phase-3'>
                                        Phase 3
                                    </div>
                                    <div class = 'phase-4' >
                                        Phase 4
                                    </div>
                                </div>
                                <div className= "BlineContainer" style={{flex: 0.2, display: "flex", backgroundColor: "white", width: "100%", height: "100%", marginRight: "15px"}}>
                                    <div class="boxesl" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor:'rgba(127, 220, 127, 0.37)'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(19, 162, 202, 0.37)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(127, 50, 215, 0.249)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxesr" style={{border: 'none', color: "white"}}>.</div>
                                </div>
                                <div className= "BTextContainer" style={{flex: 1, display: "flex", backgroundColor: "white", width: "100%", height: "100%", marginRight: "15px", paddingTop: "5px", paddingBottom: "5px"}}>
                                    <div class="boxesl" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor:'rgba(127, 220, 127, 0.37)'}}>
                                        <div className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "rgb(7, 100, 44)"}}>Preliminary Analysis</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(19, 162, 202, 0.37)"}}>
                                        <div className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "rgb(7, 46, 100)"}}>Ethics Proposal</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "#fe6993"}}>Research Study Prep</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "#fe6993"}}>Research Study Prep</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "#fe6993"}}>Research Study Prep</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(127, 50, 215, 0.249)"}}>
                                        <div className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "#302aa2"}}>Demo Market</div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxesr" style={{border: 'none'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainPanel>
            </ContentCointainer>
        </ContentSpace>
    </>
  )
}

export default Content