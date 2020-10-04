import React from 'react'
import IconComponent from '../../../components/ui/icon/icon.component'
import ButtonComponent from '../../../components/ui/button/button.component'
import { debounce } from '../../../assets/javascripts/helper'
import { DriverHeaderWrapper, DriverHeaderTitlePannel, DriverHeaderTitle, DriverHeaderSubTitle, DriverHeaderActionPanel, DriverSearchBox, DriverSearchInput } from '../driver.styles'

const DriverHeadPartial = ({setSearchVal}) => {
  //*** delay on change input  ***//
  const delayedCallback = debounce((e) => {
    let val = e.target.value
    setSearchVal(val)
  }, 300)

  const evSearchInput = (e) => {
    e.persist()
    delayedCallback(e)
  }
  
  return (
    <DriverHeaderWrapper>
      <DriverHeaderTitlePannel>
        <DriverHeaderTitle>Driver Management</DriverHeaderTitle>
        <DriverHeaderSubTitle>Data driver yg bekerja dengan Anda.</DriverHeaderSubTitle>
      </DriverHeaderTitlePannel>
      <DriverHeaderActionPanel>
        <DriverSearchBox>
          <DriverSearchInput placeholder='Cari Driver' onChange={evSearchInput} />
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