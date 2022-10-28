import React from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
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

const LogisticPage = () => {
  return (
    <>
        <Navbar/>
        <div className='infoSpace'>
          <div className='infoContainer'>
            <div className='infoLeft'>
              <TitleSpaceLogistics/>
            </div>
            <div className='infoRight'>
              <div className='infoWindow'>
                <div className='titlebar'>
                  <div className='buttons'>
                    <div className='close'/>
                    <div className='minimize'/>
                    <div className='maximize'/>
                  </div>
                  Logistics
                </div>
                <div className='content'>
                  {/* Teaching Team Information Start*/}
                  <h3>Teaching Team</h3>
                  <div className='bodytext'>
                    <Box sx={{ flexGrow: 1 }}> 
                      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 6, sm: 6, md: 16 }}>
                        {/* Dees Postma */}
                        <Grid item xs={2} sm={4} md={4}>
                          <Card sx={{ display: "flex", width: "fit-content" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography component="div" variant="h5">Dees Postma</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">Lecturer</Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">postma@utwente.nl</Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small">More Info</Button>
                              </CardActions>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, borderRadius: 50, padding: 1}} image="https://picsum.photos/200"/>
                          </Card>
                        </Grid>
                        {/* Champika */}
                        <Grid item xs={2} sm={4} md={4}>
                          <Card sx={{ display: "flex", width: "fit-content" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography component="div" variant="h5">Champika Ranasinghe</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">Lecturer</Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">postma@utwente.nl</Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small">More Info</Button>
                              </CardActions>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, borderRadius: 50, padding: 1}} image="https://picsum.photos/200"/>
                          </Card>
                        </Grid>
                        {/* Aswin Balasubramaniam */}
                        <Grid item xs={2} sm={4} md={4}>
                          <Card sx={{ display: "flex", width: "fit-content" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography component="div" variant="h5">Aswin</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">Lecturer</Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">postma@utwente.nl</Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small">More Info</Button>
                              </CardActions>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, borderRadius: 50, padding: 1}} image="https://picsum.photos/200"/>
                          </Card>
                        </Grid>
                        {/* TA1 */}
                        <Grid item xs={2} sm={4} md={4}>
                          <Card sx={{ display: "flex", width: "fit-content" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography component="div" variant="h5">Teaching Assitant 1</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">TA</Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">email@utwente.nl</Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small">More Info</Button>
                              </CardActions>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, borderRadius: 50, padding: 1}} image="https://picsum.photos/200"/>
                          </Card>
                        </Grid>
                        {/* TA2 */}
                        <Grid item xs={2} sm={4} md={4}>
                          <Card sx={{ display: "flex", width: "fit-content" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography component="div" variant="h5">Teaching Assitant 2</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">TA: Phase 1</Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">email@utwente.nl</Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small">More Info</Button>
                              </CardActions>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, borderRadius: 50, padding: 1}} image="https://picsum.photos/200"/>
                          </Card>
                        </Grid>
                        {/* TA3 */}
                        <Grid item xs={2} sm={4} md={4}>
                          <Card sx={{ display: "flex", width: "fit-content" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography component="div" variant="h5">Teaching Assitant 3</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">TA: Phase 1</Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">email@utwente.nl</Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small">More Info</Button>
                              </CardActions>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, borderRadius: 50, padding: 1}} image="https://picsum.photos/200"/>
                          </Card>
                        </Grid>
                        {/* TA4 */}
                        <Grid item xs={2} sm={4} md={4}>
                          <Card sx={{ display: "flex", width: "fit-content" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography component="div" variant="h5">Teaching Assitant 4</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">TA: Phase 1</Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">email@utwente.nl</Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small">More Info</Button>
                              </CardActions>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, borderRadius: 50, padding: 1}} image="https://picsum.photos/200"/>
                          </Card>
                        </Grid>
                        {/* TA5 */}
                        <Grid item xs={2} sm={4} md={4}>
                          <Card sx={{ display: "flex", width: "fit-content" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography component="div" variant="h5">Teaching Assitant 5</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">TA: Phase 1</Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">email@utwente.nl</Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small">More Info</Button>
                              </CardActions>
                            </Box>
                            <CardMedia component="img" sx={{ width: 200, borderRadius: 50, padding: 1}} image="https://picsum.photos/200"/>
                          </Card>
                        </Grid>
                      </Grid>              
                    </Box>
                  </div>
                  {/* Teaching Team Information End */}
                  <h3>Contact</h3>
                  <div className='bodytext'>
                    Communication Channels:Teams, Email <br/>
                    Academic Accomodations: <br/>
                    Absences: <br/>
                  </div>
                  <h3>Office Hours/Availability Calendar</h3>
                  <div className='bodytext'>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23e1dfe1&ctz=Europe%2FAmsterdam&showTitle=1&showNav=1&showPrint=1&showDate=1&showTz=1&showCalendars=0&src=ZW4uZHV0Y2gjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4" style={{width:"600px", height:"600px", scrolling:"no"}}></iframe>
                  </div>
                  <h3>Grading</h3>
                  <div className='bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Assignment Information</h3>
                  <div className='bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Studio</h3>
                  <div className='bodytext'>
                    Each assignment will be graded indvidually
                  </div>
                  <h3>Meeting Time and Location</h3>
                  <div className='bodytext'>
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