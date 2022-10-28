import React from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import TitleSpaceCalendar from '../components/TitleSpacePages/index_calendar'
import "./calendar.css"
import ReactGA from 'react-ga';

ReactGA.initialize('UA-247449191-1');

const CalendarPage = () => {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);


  return (
    <>
        <Navbar/>
        <div className='infoSpace'>
          <div className='infoContainer'>
            <div className='infoLeft'>
              <TitleSpaceCalendar/>
            </div>
            <div className='infoRight'>
              <div className='infoWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Calendar
                </div>
                <div className='content'>
                  <div className='calendarBox'>
                    <div className='calendarBody'>
                      <table className='calendarTable'>
                        <tr>
                          <th>Week</th>
                          <th>Assignments</th>
                          <th>Monday</th>
                          <th>Thursday</th>
                          <th>Project</th>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W1: Nov 14-18</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W2: Nov 21-25</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W3: Nov 28-Dec 2</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W4: Dec 5-9</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W5: Dec 12-16</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W6: Dec 19-23</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W7: Jan 9-13</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W8: Jan 16-20</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W9: Jan 23-27</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{fontWeight: 'bold'}}>W10: Jan 30-Feb 3</td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                          </td>
                          <td>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
                            <br/>
                            <a href={""} target={"_blank"} style={{}}>A1 Needfinding (group)</a>
                            <div className='note'>due next week blah blah</div>
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