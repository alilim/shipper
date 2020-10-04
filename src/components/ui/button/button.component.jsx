import React from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer } from '../button/button.styles'

const ButtonComponent = ({ children, mode, inlineSvg,  ...props  }) => {
  return (
    <ButtonContainer mode={mode} inlineSvg={inlineSvg} {...props}>
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
  evClick: PropTypes.func
}

export default ButtonComponent