import React from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer } from '../button/button.styles'

const ButtonComponent = ({ children, mode, inlineSvg, isDisabled, onClick }) => {
  return (
    <ButtonContainer mode={mode} inlineSvg={inlineSvg} {...isDisabled && {disabled: true}} {...onClick && {onClick: onClick}}>
      {children}
    </ButtonContainer>
  )
}

ButtonComponent.defaultProps = {
  children: '',
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.string,
  inlineSvg: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default ButtonComponent