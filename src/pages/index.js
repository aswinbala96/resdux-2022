import React, {useEffect, useState} from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TitleSpace from '../components/TitleSpace'
import ReactGA from 'react-ga';

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
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <Navbar toggle = {toggle}/>
      <TitleSpace/>
      <Content/>
    </>
  )
}

export default Home