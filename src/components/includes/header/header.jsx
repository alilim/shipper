//# Header
import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/images/logo.png'
import UserSvg from '../../../assets/images/svg/user-blur.svg'
import TextComponent from '../../ui/text/text.component'
import IconComponent from '../../ui/icon/icon.component'
import { HeaderContainer, HeaderLogoImg, HeaderUserWrapper, HeaderUserText, HeaderUserImg } from './header.styles'

const HeaderInclude = ({evToggleNavMobile}) => {
  return (
    <HeaderContainer>
      <div>
        <IconComponent name='bar' width='1.5em' onClick={evToggleNavMobile}/>
        <Link to='/'>
          <HeaderLogoImg src={logoImg} alt='Shipper' title='Shipper' />
        </Link>
      </div>
      <HeaderUserWrapper>
        <HeaderUserText>
          Hello, <TextComponent color='#ff4646' inline={true}>Shipper User</TextComponent>
        </HeaderUserText>
        <div>
          <HeaderUserImg src={UserSvg} alt='Shipper User' title='Shipper User' />
        </div>
      </HeaderUserWrapper>
    </HeaderContainer>
  )
}

export default HeaderInclude