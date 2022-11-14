import React, {useEffect, useState} from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpace from '../components/TitleSpace'
import ReactGA from 'react-ga';
import "./mainpage.css"

ReactGA.initialize('UA-247449191-1');

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  

  return (
    <>
      <div className='desktopPage'>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>
        <TitleSpace/>
        <Content/>
      </div>
      <div className='mobilePage'>
        <h4 style={{}}>Please open this page on a desktop or on a device with a larger screen</h4>
      </div>
    </>
  )
}

export default Home