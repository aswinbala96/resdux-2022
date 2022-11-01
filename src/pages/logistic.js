import React, { useEffect, useState } from 'react';
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
                  {/* Teaching Team Information Start*/}
                  <h3>Teaching Team</h3>
                  <ul className='log-cards'>
                    <li class="cards_item">
                      <div class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                        <div class="card_content">
                          <h2 class="card_title">Dees Postma</h2>
                          <p class="card_text" style={{fontWeight:"bold"}}>Lecturer</p>
                          <p class="card_text" style={{marginBottom: "1.25rem"}}>postma@utwente.nl</p>
                          <button class="btn card_btn">More Info</button>
                        </div>
                      </div>
                    </li>
                    <li class="cards_item">
                      <div class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                        <div class="card_content">
                          <h2 class="card_title">Champika Ranasinghe</h2>
                          <p class="card_text" style={{fontWeight:"bold"}}>Lecturer</p>
                          <p class="card_text" style={{marginBottom: "1.25rem"}}>champika@utwente.nl</p>
                          <button class="btn card_btn">More Info</button>
                        </div>
                      </div>
                    </li>
                    <li class="cards_item">
                      <div class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                        <div class="card_content">
                          <h2 class="card_title">Aswin Balasubramaniam</h2>
                          <p class="card_text" style={{fontWeight:"bold"}}>Lecturer</p>
                          <p class="card_text" style={{marginBottom: "1.25rem"}}>aswin@utwente.nl</p>
                          <button class="btn card_btn">More Info</button>
                        </div>
                      </div>
                    </li>
                    <li class="cards_item">
                      <div class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                        <div class="card_content_ta">
                          <h2 class="card_title">Teaching Assitant 1</h2>
                          <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant 1</p>
                          <p class="card_text" style={{marginBottom: "1.25rem"}}>postma@utwente.nl</p>
                          <button class="btn card_btn">More Info</button>
                        </div>
                      </div>
                    </li>
                    <li class="cards_item">
                      <div class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                        <div class="card_content_ta">
                          <h2 class="card_title">Teaching Assitant 1</h2>
                          <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant 1</p>
                          <p class="card_text" style={{marginBottom: "1.25rem"}}>postma@utwente.nl</p>
                          <button class="btn card_btn">More Info</button>
                        </div>
                      </div>
                    </li>
                    <li class="cards_item">
                      <div class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                        <div class="card_content_ta">
                          <h2 class="card_title">Teaching Assitant 1</h2>
                          <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant 1</p>
                          <p class="card_text" style={{marginBottom: "1.25rem"}}>postma@utwente.nl</p>
                          <button class="btn card_btn">More Info</button>
                        </div>
                      </div>
                    </li>
                    <li class="cards_item">
                      <div class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                        <div class="card_content_ta">
                          <h2 class="card_title">Teaching Assitant 1</h2>
                          <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant 1</p>
                          <p class="card_text" style={{marginBottom: "1.25rem"}}>postma@utwente.nl</p>
                          <button class="btn card_btn">More Info</button>
                        </div>
                      </div>
                    </li>
                    <li class="cards_item">
                      <div class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                        <div class="card_content_ta">
                          <h2 class="card_title">Teaching Assitant 1</h2>
                          <p class="card_text" style={{fontWeight:"bold"}}>Teaching Assitant 1</p>
                          <p class="card_text" style={{marginBottom: "1.25rem"}}>postma@utwente.nl</p>
                          <button class="btn card_btn">More Info</button>
                        </div>
                      </div>
                    </li>

                    
                  </ul>
                  {/* Teaching Team Information End */}
                  <h3>Contact</h3>
                  <div className='log-bodytext'>
                    Communication Channels:Teams, Email <br/>
                    Academic Accomodations: <br/>
                    Absences: <br/>
                  </div>
                  <h3>Office Hours/Availability Calendar</h3>
                  <div className='log-bodytext'>
                    <iframe className = "log-calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23e1dfe1&ctz=Europe%2FAmsterdam&showTitle=1&showNav=1&showPrint=1&showDate=1&showTz=1&showCalendars=0&src=ZW4uZHV0Y2gjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4" style={{width:"600px", height:"600px", scrolling:"no"}}></iframe>
                  </div>
                  <h3>Grading</h3>
                  <div className='log-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Assignment Information</h3>
                  <div className='log-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Studio</h3>
                  <div className='log-bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Meeting Time and Location</h3>
                  <div className='log-bodytext'>
                    Each assignment will be graded indvidually
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