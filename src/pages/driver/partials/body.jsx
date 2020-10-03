import React from 'react'
import TextComponent from '../../../components/ui/text/text.component'
import IconComponent from '../../../components/ui/icon/icon.component'
import ButtonComponent from '../../../components/ui/button/button.component'
import { DriverContentWrapper,  DriverList, DriverItem, DriverItemHeader, DriverItemHeaderID, DriverItemHeaderLabel, DriverItemBody, DriverItemImage, DriverItemLabel, DriverItemValue, DriverPagination } from '../driver.styles'

const DriverBodyPartial = () => {
  return (
    <DriverContentWrapper>
      <DriverList>
        <DriverItem>
          <DriverItemHeader>
            <DriverItemHeaderID>Driver ID <TextComponent color='#ff4646' inline={true}>291823XY</TextComponent></DriverItemHeaderID>
            <DriverItemHeaderLabel>...</DriverItemHeaderLabel>
          </DriverItemHeader>
          <DriverItemBody>
            <DriverItemImage>
              <IconComponent name='user' width='4em'/>
            </DriverItemImage>
            <aside>
              <DriverItemLabel>Name Driver</DriverItemLabel>
              <DriverItemValue>First Name, Last Name</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Telepon</DriverItemLabel>
              <DriverItemValue>Phone Number</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Email</DriverItemLabel>
              <DriverItemValue>Email Address</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Tanggal Lahir</DriverItemLabel>
              <DriverItemValue>DD-MM-YYYY</DriverItemValue>
            </aside>
          </DriverItemBody>
        </DriverItem>
        <DriverItem>
          <DriverItemHeader>
            <DriverItemHeaderID>Driver ID <TextComponent color='#ff4646' inline={true}>291823XY</TextComponent></DriverItemHeaderID>
            <DriverItemHeaderLabel>...</DriverItemHeaderLabel>
          </DriverItemHeader>
          <DriverItemBody>
            <DriverItemImage>
              <IconComponent name='user' width='4em'/>
            </DriverItemImage>
            <aside>
              <DriverItemLabel>Name Driver</DriverItemLabel>
              <DriverItemValue>First Name, Last Name</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Telepon</DriverItemLabel>
              <DriverItemValue>Phone Number</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Email</DriverItemLabel>
              <DriverItemValue>Email Address</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Tanggal Lahir</DriverItemLabel>
              <DriverItemValue>DD-MM-YYYY</DriverItemValue>
            </aside>
          </DriverItemBody>
        </DriverItem>
        <DriverItem>
          <DriverItemHeader>
            <DriverItemHeaderID>Driver ID <TextComponent color='#ff4646' inline={true}>291823XY</TextComponent></DriverItemHeaderID>
            <DriverItemHeaderLabel>...</DriverItemHeaderLabel>
          </DriverItemHeader>
          <DriverItemBody>
            <DriverItemImage>
              <IconComponent name='user' width='4em'/>
            </DriverItemImage>
            <aside>
              <DriverItemLabel>Name Driver</DriverItemLabel>
              <DriverItemValue>First Name, Last Name</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Telepon</DriverItemLabel>
              <DriverItemValue>Phone Number</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Email</DriverItemLabel>
              <DriverItemValue>Email Address</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Tanggal Lahir</DriverItemLabel>
              <DriverItemValue>DD-MM-YYYY</DriverItemValue>
            </aside>
          </DriverItemBody>
        </DriverItem>
        <DriverItem>
          <DriverItemHeader>
            <DriverItemHeaderID>Driver ID <TextComponent color='#ff4646' inline={true}>291823XY</TextComponent></DriverItemHeaderID>
            <DriverItemHeaderLabel>...</DriverItemHeaderLabel>
          </DriverItemHeader>
          <DriverItemBody>
            <DriverItemImage>
              <IconComponent name='user' width='4em'/>
            </DriverItemImage>
            <aside>
              <DriverItemLabel>Name Driver</DriverItemLabel>
              <DriverItemValue>First Name, Last Name</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Telepon</DriverItemLabel>
              <DriverItemValue>Phone Number</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Email</DriverItemLabel>
              <DriverItemValue>Email Address</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Tanggal Lahir</DriverItemLabel>
              <DriverItemValue>DD-MM-YYYY</DriverItemValue>
            </aside>
          </DriverItemBody>
        </DriverItem>
        <DriverItem>
          <DriverItemHeader>
            <DriverItemHeaderID>Driver ID <TextComponent color='#ff4646' inline={true}>291823XY</TextComponent></DriverItemHeaderID>
            <DriverItemHeaderLabel>...</DriverItemHeaderLabel>
          </DriverItemHeader>
          <DriverItemBody>
            <DriverItemImage>
              <IconComponent name='user' width='4em'/>
            </DriverItemImage>
            <aside>
              <DriverItemLabel>Name Driver</DriverItemLabel>
              <DriverItemValue>First Name, Last Name</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Telepon</DriverItemLabel>
              <DriverItemValue>Phone Number</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Email</DriverItemLabel>
              <DriverItemValue>Email Address</DriverItemValue>
            </aside>
            <aside>
              <DriverItemLabel>Tanggal Lahir</DriverItemLabel>
              <DriverItemValue>DD-MM-YYYY</DriverItemValue>
            </aside>
          </DriverItemBody>
        </DriverItem>
      </DriverList>
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
    </DriverContentWrapper>
  )
}

export default DriverBodyPartial