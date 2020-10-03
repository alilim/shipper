import React from 'react'
import IconComponent from '../../../components/ui/icon/icon.component'
import ButtonComponent from '../../../components/ui/button/button.component'
import { DriverHeaderWrapper, DriverHeaderTitlePannel, DriverHeaderTitle, DriverHeaderSubTitle, DriverHeaderActionPanel, DriverSearchBox, DriverSearchInput } from '../driver.styles'

const DriverHeadPartial = () => {
  return (
    <DriverHeaderWrapper>
      <DriverHeaderTitlePannel>
        <DriverHeaderTitle>Driver Management</DriverHeaderTitle>
        <DriverHeaderSubTitle>Data driver yg bekerja dengan Anda.</DriverHeaderSubTitle>
      </DriverHeaderTitlePannel>
      <DriverHeaderActionPanel>
        <DriverSearchBox>
          <DriverSearchInput placeholder='Cari Driver'/>
          <IconComponent name='search' width='1em'/>
        </DriverSearchBox>
        <ButtonComponent mode='redBigDefault' inlineSvg='right'>
          Tambah Driver
          <IconComponent name='add' width='.825em'/>
        </ButtonComponent>
      </DriverHeaderActionPanel>
    </DriverHeaderWrapper>
  )
}

export default DriverHeadPartial