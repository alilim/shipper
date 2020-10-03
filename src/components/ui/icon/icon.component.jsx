import React from 'react'
import PropTypes from 'prop-types'

import { IconContainer } from '../icon/icon.styles'

const IconComponent = ({ children, mode, name, width, mobileWidth, isActive, onClick }) => {
  return <IconContainer mode={mode} name={name} width={width} mobileWidth={mobileWidth} isActive={isActive} {...onClick && {onClick: onClick}}>{children}</IconContainer>
}

IconComponent.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  mobileWidth: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

export default IconComponent