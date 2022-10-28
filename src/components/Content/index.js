import React, { useState } from 'react'
import { ContentSpace, MainPanel, ContentCointainer, SidePanel } from './ContentElements'
import './content.css';

function Content() {
    const [isShown, setIsShown] = useState(true)

    const handleClick = event => {
        // 👇️ toggle visibility
        setIsShown(current => !current);
    };

  return (
    <>
        <ContentSpace>
            <ContentCointainer>
                <SidePanel>
                    <h2 class= 'side-header'>Important Dates</h2>
                    <ul class= 'ul-style'>
                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>[14/11]</span>: Deliverable 1
                        </li>

                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [14/11]
                            </span>: Deliverable 2
                        </li>

                        <li style={{fontFamily: "Inconsolata, monospace"}}>
                            <span class = 'highlight'>
                                [14/11]
                            </span>: Deliverable 3
                        </li>
                    </ul>
                    <h2 class= 'side-header'>Staff Info</h2>
                    <ul class= 'ul-style'>
                        <li ><span class = 'highlight'>Dees Postma</span></li>
                        <li><span class = 'highlight'>Champika Ranasinghe</span></li>
                        <li><span class = 'highlight'>Aswin B</span></li>
                        <li><span class = 'highlight-ta'>Teaching Assistant 1</span></li>
                        <li><span class = 'highlight-ta'>Teaching Assistant 2</span></li>
                        <li><span class = 'highlight-ta'>Teaching Assistant 3</span></li>
                        <li><span class = 'highlight-ta'>Teaching Assistant 4</span></li>
                        <li><span class = 'highlight-ta'>Teaching Assistant 5</span></li>
                        <li><span class = 'highlight-ta'>Teaching Assistant 6</span></li>
                        <li><span class = 'highlight-ta'>Teaching Assistant 7</span></li>
                        <li><span class = 'highlight-ta'>Teaching Assistant 8</span></li>
                    </ul>
                </SidePanel>
                <MainPanel>
                    <div style={{display: "flex", flexDirection: 'column', width: "100%", height: "98%"}}>
                        <div style={{display: isShown ? 'block' : 'none'}}>
                            <div class = 'phase-bar' style={{height: "10vh"}}>
                                <div onClick={handleClick} class = 'phase-1'>
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
                        </div>
                        <div style={{flex: 1, backgroundColor: "white", width: "100%", fontFamily: 'Space Mono', fontSize: '19px',  display: isShown ? 'none' : 'block'}}>
                            Project Phase Timeline Overview (Click on Various Elements!)
                        </div>
                        {/* alignItems: "center", justifyContent: "center" */}
                        <div style={{flex: 17, backgroundColor: "transparent", width: "100%", display: "flex", display: isShown ? 'none' : 'flex'}}>
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
                                    <div onClick={handleClick} class = 'phase-1'>
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