import React, { useState } from 'react'
import Header from '../components/organisms/Header'
import Landing from '../components/organisms/Landing'
import About from '../components/organisms/About'
import ChatContainer from '../components/organisms/ChatContainer'
import Contact from '../components/organisms/Contact'
import Footer from '../components/organisms/Footer'
import SideDrawer from '../components/organisms/SideDrawer'

const LandingPage = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prevState => !prevState)
  }

  return (
    <>
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <Header clicked={sideDrawerToggleHandler} />
      <Landing />
      <About />
      <ChatContainer />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage
