import React from 'react'
import { connect } from 'react-redux'
import LoadingComponent from '../../../components/ui/loading/loading.component'
import TextComponent from '../../../components/ui/text/text.component'
import IconComponent from '../../../components/ui/icon/icon.component'
import ImageComponent from '../../../components/ui/image/image.component'
import ButtonComponent from '../../../components/ui/button/button.component'
import { transformDate } from '../../../assets/javascripts/helper'
import { DriverContentWrapper,  DriverList, DriverItem, DriverItemHeader, DriverItemHeaderID, DriverItemHeaderLabel, DriverItemBody, DriverItemImage, DriverItemGroupWrapper, DriverItemGroup, DriverItemLabel, DriverItemValue, DriverPagination, EmptyContainer } from '../driver.styles'

const DriverBodyPartial = ({isLoading, currentDriver, searchVal}) => {
  let dataDriver = currentDriver && currentDriver.driver  || []
  //*** data at redux, filter by search  ***//
  if(currentDriver && currentDriver.driver && currentDriver.driver.length && searchVal != '') {
    dataDriver = currentDriver.driver.filter(driver => (driver.name?.first && driver.name.first.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1) )
  }
  
  return (
    <DriverContentWrapper>
      {
        isLoading && <LoadingComponent mode='medium' position='left'/>
      }
      {
        (dataDriver.length) ? (
          <DriverList>
            {
              dataDriver.map((driver, idx) => {
                return (
                  <DriverItem key={idx}>
                    <DriverItemHeader>
                      <DriverItemHeaderID><div>Driver ID</div> <TextComponent color='#ff4646'>{`${driver?.id?.name}${driver?.id?.value || 'XXX'}`}</TextComponent></DriverItemHeaderID>
                      <DriverItemHeaderLabel>...</DriverItemHeaderLabel>
                    </DriverItemHeader>
                    <DriverItemBody>
                      <DriverItemImage>
                        {
                          driver?.picture?.large ? (
                            <ImageComponent src={driver?.picture?.large} width='auto' cover={true} coverMode='round' coverWidth='4em' coverMobileWidth='6em'/>
                          ) : <IconComponent name='user' width='4em' mobileWidth='6em'/>
                        }
                      </DriverItemImage>
                      <DriverItemGroupWrapper>
                        <DriverItemGroup desktop={false}>
                          <DriverItemLabel>Name Driver</DriverItemLabel>
                          <DriverItemValue>{`${driver?.name?.title} ${driver?.name?.first} ${driver?.name?.last}`}</DriverItemValue>
                        </DriverItemGroup>
                        <DriverItemGroup desktop={false}>
                          <DriverItemLabel>Telepon</DriverItemLabel>
                          <DriverItemValue>{driver?.phone || `Phone Number`}</DriverItemValue>
                        </DriverItemGroup>
                        <DriverItemGroup desktop={true}>
                          <DriverItemLabel>Email</DriverItemLabel>
                          <DriverItemValue><TextComponent>{driver?.email || `Email Address`}</TextComponent></DriverItemValue>
                        </DriverItemGroup>
                        <DriverItemGroup desktop={true}>
                          <DriverItemLabel>Tanggal Lahir</DriverItemLabel>
                          <DriverItemValue>{driver?.dob.date ? transformDate(driver?.dob.date) : `DD-MM-YYYY`}</DriverItemValue>
                        </DriverItemGroup>
                      </DriverItemGroupWrapper>
                    </DriverItemBody>
                  </DriverItem>
                )
              }) 
            }
          </DriverList>
        ) : <EmptyContainer> <IconComponent name='empty' width='1.5em' mode='nav'>There is no Driver.</IconComponent></EmptyContainer>
      }
      {
        (dataDriver.length) && (
          <DriverPagination>
            <div>
              <ButtonComponent mode='transparent' inlineSvg='left' isDisabled={true}>
                <IconComponent name='left-arrow' isActive={false} width='.825em'/>
                Previous Page
              </ButtonComponent>
              <ButtonComponent mode='transparent' inlineSvg='right'>
                Next Page
                <IconComponent name='right-arrow' isActive={true} width='.825em'/>
              </ButtonComponent>
            </div>
          </DriverPagination>
        )
      }
     
    </DriverContentWrapper>
  )
}

const mapStateToProps = state => ({
  currentDriver: state.driver.currentDriver,
})

export default connect(mapStateToProps)(DriverBodyPartial)