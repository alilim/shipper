//# Driver Management Page 
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import MainLayout from '../../components/layouts/main'
import DriverHeadPartial from './partials/head'
import DriverBodyPartial from './partials/body'
import { setCurrentDriver} from '../../../redux/driver/driver.actions'

const DriverIndex = ({currentDriver, setCurrentDriver}) => {
  const [ isFirstLoad, setFirstLoad ] = useState(true)
  const [ isLoading, setLoading ] = useState(false)
  const [ searchVal, setSearchVal ] = useState('')

  //*** useEffect for load initial data and save to redux  ***//
  useEffect(() => {
    if(!isFirstLoad) return
    if(currentDriver) return 
    setLoading(true)
    async function getData() {
      const response = await fetch(`https://randomuser.me/api/?results=30`).then(res => res.json())
      const result = (response && response.results) ? response.results : []
      setCurrentDriver({ driver: result })
      setLoading(false)
      setFirstLoad(false)
    }
    getData()
  }, [isFirstLoad])

  return (
    <MainLayout>
      <section>
        <DriverHeadPartial setSearchVal={setSearchVal} />
        <DriverBodyPartial isLoading={isLoading} searchVal={searchVal} />
      </section>
    </MainLayout>
  )
}

//*** Mapping redux object ***//
const mapStateToProps = state => ({
  currentDriver: state.driver.currentDriver,
})

//*** Mapping redux function ***//
const mapDispatchToProps = dispatch => ({
  setCurrentDriver: driver => dispatch(setCurrentDriver(driver)),
})

//*** connect component with redux ***//
export default connect(mapStateToProps, mapDispatchToProps)(DriverIndex)
