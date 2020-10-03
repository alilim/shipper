import React from 'react'
import PropTypes from 'prop-types'

import { IconContainer } from '../icon/icon.styles'

const IconComponent = ({ children, mode, name, width, isActive, onClick }) => {
  return <IconContainer mode={mode} name={name} width={width} isActive={isActive} {...onClick && onClick}>{children}</IconContainer>
}

IconComponent.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

export default IconComponent