import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LoadingComponent from '../../../components/ui/loading/loading.component'
import TextComponent from '../../../components/ui/text/text.component'
import IconComponent from '../../../components/ui/icon/icon.component'
import ImageComponent from '../../../components/ui/image/image.component'
import ButtonComponent from '../../../components/ui/button/button.component'
import { transformDate } from '../../../assets/javascripts/helper'
import { DriverContentWrapper,  DriverList, DriverItem, DriverItemHeader, DriverItemHeaderID, DriverItemHeaderLabel, DriverItemBody, DriverItemImage, DriverItemGroupWrapper, DriverItemGroup, DriverItemLabel, DriverItemValue, DriverPagination, EmptyContainer } from '../driver.styles'

const DriverBodyPartial = ({isLoading, currentDriver, searchVal}) => {
  const defaultMapPostObj = { start: 0, end: 5 }
  const [ isLoadingSlide, setLoadingSlide ] = useState(false)
  const [ currentPosition, setCurrentPosition ] =  useState(1)
  const [ mapPost, setMapPost ] = useState(defaultMapPostObj)

  //*** UseEffect checking if search input is changed, to reset page ***//
  useEffect(() => {
    setMapPost(defaultMapPostObj)
    setCurrentPosition(1)
  }, [searchVal])

  //*** slide page using current position, mapping position and alittle opacity effect with timeout ***//
  const evSlide = (e) => {
    e.persist()
    if(isLoadingSlide) return
    let type = e.target.getAttribute('data-type')
    const curMapPost = mapPost,
      curCurrentPost = currentPosition
    setLoadingSlide(true)
    setTimeout(()=> {
      if(type == 'left') {
        setMapPost({
          start: curMapPost.start - 5,
          end: curMapPost.end - 5,
        })
        setCurrentPosition(curCurrentPost-1)
      }else {
        setMapPost({
          start: curMapPost.start + 5,
          end: curMapPost.end + 5,
        })
        setCurrentPosition(curCurrentPost+1)
      }
      setLoadingSlide(false)
    }, 500)  
  }

  let dataDriver = currentDriver && currentDriver.driver  || []
  //*** data at redux, filter by search  ***//
  if(currentDriver && currentDriver.driver && currentDriver.driver.length && searchVal != '') {
    dataDriver = currentDriver.driver.filter(driver => (driver.name?.first && driver.name.first.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1) )
  }
  const totalSlide = Math.ceil(dataDriver.length / 5)

  return (
    <DriverContentWrapper>
      {
        isLoading && <LoadingComponent mode='medium' position='left'/>
      }
      {
        (dataDriver.length) ? (
          <DriverList>
            {
              dataDriver.slice(mapPost.start, mapPost.end).map((driver, idx) => {
                return (
                  <DriverItem key={idx} isLoading={isLoadingSlide}>
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
        ) : (dataDriver.length <= 0  && currentDriver !== null) ? <EmptyContainer> <IconComponent name='empty' width='1.5em' mode='nav'>There is no Driver.</IconComponent></EmptyContainer> : null
      }
      {
        (dataDriver.length && dataDriver.length > 5) ? (
          <DriverPagination>
            <div>
              <ButtonComponent mode='transparent' inlineSvg='left' disabled={currentPosition == 1 ? true : false} data-type='left' onClick={evSlide} >
                <IconComponent name='left-arrow' isActive={currentPosition == 1 ? false : true} width='.825em'/>
                Previous Page
              </ButtonComponent>
              <ButtonComponent mode='transparent' inlineSvg='right' disabled={currentPosition >= totalSlide ? true : false} data-type='right' onClick={evSlide} >
                Next Page
                <IconComponent name='right-arrow' isActive={currentPosition >= totalSlide ? false : true} width='.825em' />
              </ButtonComponent>
            </div>
          </DriverPagination>
        ) : null
      }
     
    </DriverContentWrapper>
  )
}

const mapStateToProps = state => ({
  currentDriver: state.driver.currentDriver,
})

export default connect(mapStateToProps)(DriverBodyPartial)