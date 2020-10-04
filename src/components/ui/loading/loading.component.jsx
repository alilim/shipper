import React from 'react'
import PropTypes from 'prop-types'

import { LoadingContainer, LoadingParentContainer } from '../loading/loading.styles'

const LoadingComponent = ({ mode, position }) => {
  return <LoadingContainer mode={mode} position={position}></LoadingContainer>
}

LoadingComponent.propTypes = {
  mode: PropTypes.string.isRequired, 
  position: PropTypes.string,
}

export default LoadingComponent