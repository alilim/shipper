//# Header
import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/images/logo.png'
import UserSvg from '../../../assets/images/svg/user-blur.svg'
import TextComponent from '../../ui/text/text.component'
import { HeaderContainer, HeaderLogoImg, HeaderUserWrapper, HeaderUserText, HeaderUserAvatar, HeaderUserImg } from './header.styles'

const HeaderInclude = () => {
  return (
    <HeaderContainer>
      <div>
        <Link to='/'>
          <HeaderLogoImg src={logoImg} alt='Shipper' title='Shipper' />
        </Link>
      </div>
      <HeaderUserWrapper>
        <HeaderUserText>
          Hello, <TextComponent color='#ff4646' inline={true}>Shipper User</TextComponent>
        </HeaderUserText>
        <HeaderUserAvatar>
          <HeaderUserImg src={UserSvg} alt='Shipper User' title='Shipper User' />
        </HeaderUserAvatar>
      </HeaderUserWrapper>
    </HeaderContainer>
  )
}

export default HeaderInclude