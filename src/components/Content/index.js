import React, { useState } from 'react'
import { ContentSpace, MainPanel, ContentCointainer, SidePanel } from './ContentElements'
import { IoIosArrowRoundBack } from "react-icons/io";
import './content.css';

import Hexagon2 from '../Hexagon2';
import Hexagon3 from '../Hexagon3';
import Hexagon1 from '../Hexagon1';
import ProjectPage from '../../pages/project';
import { HashLink as Link1 } from 'react-router-hash-link';


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
                            <Link1 smooth to="/calendar#exam1"><span class = 'highlight'>[24/11]</span></Link1>: Exam 1
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam1"><span class = 'highlight'>[25/11]</span></Link1>: Deliverable 1
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam2"><span class = 'highlight'>
                                [08/12]
                            </span></Link1>: Exam 2
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam2"><span class = 'highlight'>
                                [09/12]
                            </span></Link1>: Deliverable 2
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam3"><span class = 'highlight'>
                                [17/01]
                            </span></Link1>: Exam 3
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam3"><span class = 'highlight'>
                                [20/01]
                            </span></Link1>: Deliverable 3
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam4"><span class = 'highlight'>
                                [25/01]
                            </span></Link1>: Oral Reflection
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam4"><span class = 'highlight'>
                                [26/01]
                            </span></Link1>: Oral Reflection
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam4"><span class = 'highlight'>
                                [27/01]
                            </span></Link1>: Oral Reflection
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam4"><span class = 'highlight'>
                                [30/01]
                            </span></Link1>: Oral Reflection
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam5"><span class = 'highlight'>
                                [02/02]
                            </span></Link1>: Resit
                        </li>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <Link1 smooth to="/calendar#exam5"><span class = 'highlight'>
                                [03/02]
                            </span></Link1>: Demo Market
                        </li>
                    </ul>
                    <h2 class= 'side-header'>Staff Info</h2>
                    <ul class= 'ul-style-con'>
                        <li><Link1 smooth to="/logistic#dees"><span class = 'highlight'>Dees Postma</span></Link1></li>
                        <li><Link1 smooth to="/logistic#champika"><span class = 'highlight'>Champika Ranasinghe</span></Link1></li>
                        <li><Link1 smooth to="/logistic#aswin"><span class = 'highlight'>Aswin B</span></Link1></li>
                        <li><Link1 smooth to="/logistic#sander"><span class = 'highlight-ta'>Sander Dullaert (TA)</span></Link1></li>
                        <li><Link1 smooth to="/logistic#gerg"><span class = 'highlight-ta'>Gergana Dzhondzhorova (TA)</span></Link1></li>
                        <li><Link1 smooth to="/logistic#tanja"><span class = 'highlight-ta'>Tanja Kampman (TA)</span></Link1></li>
                        <li><Link1 smooth to="/logistic#eva"><span class = 'highlight-ta'>Eva Lahuis (TA)</span></Link1></li>
                        <li><Link1 smooth to="/logistic#van"><span class = 'highlight-ta'>Vanessa Markos (TA)</span></Link1></li>
                        <li><Link1 smooth to="/logistic#ren"><span class = 'highlight-ta'>Renske Mulder (TA)</span></Link1></li>
                        <li><Link1 smooth to="/logistic#strat"><span class = 'highlight-ta'>Stratos Mytaros (TA)</span></Link1></li>
                        <li><Link1 smooth to="/logistic#han"><span class = 'highlight-ta'>Hannah Ottenschot (TA)</span></Link1></li>
                        <li><Link1 smooth to="/logistic#altea"><span class = 'highlight-ta'>Altea Vesta Junio (TA)</span></Link1></li>
                    </ul>
                </SidePanel>
                <MainPanel>
                    <div style={{display: "flex", flexDirection: 'column', width: "100%", height: "98%"}}>
                        <div style={{display: isShown1 ? 'none' : 'block', flexDirection: 'column', height: "90%" }}>
                            <div style={{display: "flex"}}>
                                <div onClick={handleClick1} style={{cursor: "pointer", flex: 1}}> 
                                    <IoIosArrowRoundBack/>
                                </div>
                            </div>
                            <ProjectPage/>
                        </div>
                        <div className = "title-con" style={{flex: 1, backgroundColor: "white", width: "100%", fontFamily: 'Space Mono', fontSize: '19px',  display: isShown1 ? 'block' : 'none'}}>
                            Project Phase Timeline Overview (Click on Various Elements!)
                        </div>
                        {/* alignItems: "center", justifyContent: "center" */}
                        <div style={{flex: 17, backgroundColor: "transparent", width: "100%", display: "flex", display: isShown1 ? 'flex' : 'none'}}>
                            <div style={{display: "flex", flexDirection: "column", width: "100%", height: "80%"}}>
                                <div className= "TTextContainer" style={{flex: 1, display: "flex", backgroundColor: "white", width: "99%", height: "100%", marginRight: "20px", paddingTop: "5px"}}>
                                    <div class="boxesl" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor:'rgba(127, 220, 127, 0.37)'}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "18px", color: "rgb(7, 100, 44)"}}><Link1 smooth to="#empphase1" className='phasetextt' style={{color: "rgb(7, 100, 44)"}}>Day 1: Context Analysis: Part 1</Link1></div>
                                    </div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor:'rgba(127, 220, 127, 0.37)'}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "18px", color: "rgb(7, 100, 44)"}}><Link1 smooth to="#emp2phase1" className='phasetextt' style={{color: "rgb(7, 100, 44)"}}>Day 2: Context Analysis: Part 2</Link1></div>
                                    </div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor:'rgba(127, 220, 127, 0.37)'}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "18px", color: "rgb(7, 100, 44)"}}><Link1 smooth to="#ideaphase1" className='phasetextt' style={{color: "rgb(7, 100, 44)"}}>Days 3-4: Product Concept</Link1></div>
                                    </div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(19, 162, 202, 0.37)"}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "18px", color: "rgb(7, 46, 100)"}}><Link1 smooth to="#empphase2" className='phasetextt' style={{color: "rgb(7, 46, 100)"}}>Day 5: Interview Preparation & Plan</Link1></div>
                                    </div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(19, 162, 202, 0.37)"}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "18px", color: "rgb(7, 46, 100)"}}><Link1 smooth to="#ideaphase2" className='phasetextt' style={{color: "rgb(7, 46, 100)"}}>Day 6: Refine Problem & Concept</Link1></div>
                                    </div>
                                    {/* <div class="boxes" style={{borderRight: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(19, 162, 202, 0.37)"}}></div> */}
                                    {/* <div class="boxes" style={{border: 'none'}}></div> */}
                                    {/* <div class="boxes" style={{border: 'none'}}></div> */}
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(19, 162, 202, 0.37)"}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "18px", color: "rgb(7, 46, 100)"}}><Link1 smooth to="#protophase2" className='phasetextt' style={{color: "rgb(7, 46, 100)"}}>Day 7: Lo-Fi Prototype</Link1></div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#fe6993"}}><Link1 smooth to="#protophase3" className='phasetextt' style={{color:"#fe6993"}}>Hi Fi Protoype</Link1></div>
                                    </div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#fe6993"}}><Link1 smooth to="#testphase3" className='phasetextt' style={{color:"#fe6993"}}>Experimental Testing</Link1></div>
                                    </div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#fe6993"}}><Link1 smooth to="#test2phase3" className='phasetextt' style={{color:"#fe6993"}}>User Confrontations</Link1></div>
                                    </div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(127, 50, 215, 0.249)"}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#302aa2"}}><Link1 smooth to="#protophase4" className='phasetextt' style={{color:"#302aa2"}}>Oral Reflection</Link1></div>
                                    </div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxesr" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(127, 50, 215, 0.249)"}}>
                                        <div onClick={handleClick1} className='phasetextt' style={{writingMode: 'vertical-lr', transform: 'rotate(180deg)', alignSelf: "end", justifySelf: "end", margin: "5px", fontSize: "20px", color: "#302aa2"}}><Link1 smooth to="#test2phase4" className='phasetextt' style={{color:"#302aa2"}}>Final Document Submission</Link1></div>
                                    </div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                </div>
                                <div className= "TlineContainer" style={{flex: 0.2, display: "flex", backgroundColor: "white", width: "99%", height: "100%", marginRight: "20px", paddingTop: "5px"}}>
                                    <div class="boxesl" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor:'rgba(127, 220, 127, 0.37)'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor:'rgba(127, 220, 127, 0.37)'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor:'rgba(127, 220, 127, 0.37)'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderBottom: 'none', borderRight: 'none', borderTop: 'none', borderColor: "rgba(19, 162, 202, 0.37)"}}></div>
                                    <div class="boxes" style={{borderBottom: 'none', borderTop: 'none', borderColor: "rgba(19, 162, 202, 0.37)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none',borderColor: "rgba(254, 105, 147, 0.1)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(127, 50, 215, 0.249)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none', color: "white"}}>.</div>
                                    <div class="boxesr" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(127, 50, 215, 0.249)"}}></div>
                                </div>
                                <div class = 'phase-bar'>
                                    <div class = 'phase-1' onClick={handleClick1}>
                                        <Link1 smooth to="#phase1" className='linkunder' style={{color: "rgb(7, 100, 44)"}}>
                                            Phase 1
                                        </Link1> 
                                    </div>
                                    <div class = 'phase-2' onClick={handleClick1}>
                                        <Link1 smooth to="#phase2" className='linkunder' style={{color: "rgb(7, 46, 100)"}}>
                                            Phase 2
                                        </Link1> 
                                    </div>
                                    <div class = 'phase-3' onClick={handleClick1}>
                                        <Link1 smooth to="#phase3" className='linkunder' style={{color: "#fe6993", cursor: "not-allowed"}}>
                                            Phase 3
                                        </Link1> 
                                    </div>
                                    <div class = 'phase-4' onClick={handleClick1}>
                                        <Link1 smooth to="#phase4" className='linkunder' style={{color: "#302aa2", cursor: "not-allowed"}}>
                                            Phase 4
                                        </Link1> 
                                    </div>
                                </div>
                                <div className= "BlineContainer" style={{flex: 0.2, display: "flex", backgroundColor: "white", width: "100%", height: "100%", marginRight: "15px"}}>
                                    <div class="boxesl" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor:'rgba(127, 220, 127, 0.37)'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(19, 162, 202, 0.37)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(19, 162, 202, 0.37)"}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(254, 105, 147, 0.1)"}}></div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', borderColor: "rgba(127, 50, 215, 0.249)"}}></div>
                                    <div class="boxesr" style={{border: 'none', color: "white"}}>.</div>
                                </div>
                                <div className= "BTextContainer" style={{flex: 1, display: "flex", backgroundColor: "white", width: "100%", height: "100%", marginRight: "15px", paddingTop: "5px", paddingBottom: "5px"}}>
                                    <div class="boxesl" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor:'rgba(127, 220, 127, 0.37)'}}>
                                        <div onClick={handleClick1} className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "18px", color: "rgb(7, 100, 44)"}}><Link1 smooth to="#defphase1" className='phasetextt' style={{color:"rgb(7, 100, 44)"}}>Day 2: Research Questions</Link1></div>
                                    </div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(19, 162, 202, 0.37)"}}>
                                        <div onClick={handleClick1} className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "18px", color: "rgb(7, 46, 100)"}}><Link1 smooth to="#defphase2" className='phasetextt' style={{color:"rgb(7, 46, 100)"}}>Day 6: Interview Analysis</Link1></div>
                                    </div>
                                    {/* <div class="boxes" style={{border: 'none'}}></div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(19, 162, 202, 0.37)"}}>
                                        <div onClick={handleClick1} className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "18px", color: "rgb(7, 46, 100)"}}><Link1 smooth to="#protophase2" className='phasetextt' style={{color:"rgb(7, 46, 100)"}}>Day 8: User Confrontations & Testing</Link1></div>
                                    </div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>

                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "#fe6993"}}>Research Study Prep</div>
                                    </div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "#fe6993"}}>Research Study Prep</div>
                                    </div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(254, 105, 147, 0.1)"}}>
                                        <div className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "#fe6993"}}>Research Study Prep</div>
                                    </div> */}
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    <div class="boxes" style={{border: 'none'}}></div>
                                    {/* <div class="boxes" style={{borderLeft: 'none', borderBottom: 'none', borderTop: 'none', display: "grid", borderColor: "rgba(127, 50, 215, 0.249)"}}>
                                        <div onClick={handleClick1} className='phasetext' style={{writingMode: 'vertical-rl', alignSelf: 'start', justifyContent: 'end', fontSize: "20px", color: "#302aa2"}}><Link1 smooth to="#testphase4" className='phasetextt' style={{color:"#302aa2"}}>Demo Market</Link1></div>
                                    </div> */}
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