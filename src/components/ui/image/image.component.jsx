import React from 'react'
import PropTypes from 'prop-types'

import { ImageCoverContainer, ImageContainer } from './image.styles'

const ImageComponent = ({ src, width, height, mobileWidth, mobileHeight, cover, coverMode, coverWidth, coverMobileWidth }) => {
  return cover ? (
    <ImageCoverContainer coverMode={coverMode} coverWidth={coverWidth} coverMobileWidth={coverMobileWidth}>
      <ImageContainer src={src}/>
    </ImageCoverContainer>
  ) : <ImageContainer src={src} width={width} height={height} mobileWidth={mobileWidth} mobileHeight={mobileHeight} />
 

}

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  mobileWidth: PropTypes.string,
  mobileHeight: PropTypes.string,
  cover: PropTypes.bool,
  coverMode: PropTypes.string,
  coverwidth: PropTypes.string,
  coverMobileWidth: PropTypes.string,
}

export default ImageComponent