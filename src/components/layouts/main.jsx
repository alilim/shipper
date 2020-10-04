import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HeaderInclude from '../includes/header/header'
import NavInclude from '../includes/nav/nav'

import { MainLayoutContainer, ContentContainer } from './layout.styles'

const MainLayout = ({children}) => {
  const [ isOpenNavMobile, setOpenNavMobile ] = useState(false)

  //*** called for toogle navigation on mobile ***//
  const evToggleNavMobile = () => {
    const isOpen = isOpenNavMobile,
          bodyEl = document.getElementsByTagName("BODY")[0]
    if(!isOpen) bodyEl.classList.add("is-mute")
    else bodyEl.classList.remove("is-mute")
    setOpenNavMobile(!isOpen)
  }

  return (
    <MainLayoutContainer>
      <HeaderInclude evToggleNavMobile={evToggleNavMobile} />
      <NavInclude evToggleNavMobile={evToggleNavMobile} isOpenNavMobile={isOpenNavMobile} />
      <ContentContainer>{children}</ContentContainer>
    </MainLayoutContainer>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout