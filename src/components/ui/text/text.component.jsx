import React from 'react'
import PropTypes from 'prop-types'

import { TextContainer } from '../text/text.styles'

const TextComponent = ({ children, color, fontWeight, fontSize, elipsis, inline }) => {
  return (
    <TextContainer color={color} fontWeight={fontWeight} fontSize={fontSize} elipsis={elipsis} inline={inline}>
      {children}
    </TextContainer>
  )
}

TextComponent.defaultProps = {
  elipsis: true,
  inline: false
}

TextComponent.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  elipsis: PropTypes.bool, 
  inline: PropTypes.bool
}

export default TextComponent