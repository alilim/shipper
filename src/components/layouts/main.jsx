//# Main layout
import React from 'react'
import PropTypes from 'prop-types'
import HeaderInclude from '../includes/header/header'
import NavInclude from '../includes/nav/nav'

import { MainLayoutContainer, ContentContainer } from './layout.styles'

const MainLayout = ({children}) => {
  return (
    <MainLayoutContainer>
      <HeaderInclude />
      <NavInclude />
      <ContentContainer>{children}</ContentContainer>
    </MainLayoutContainer>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout