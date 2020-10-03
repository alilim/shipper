//# Driver Management Page 
import React from 'react'
import MainLayout from '../../components/layouts/main'
import DriverHeadPartial from './partials/head'
import DriverBodyPartial from './partials/body'

const DriverIndex = () => {
  return (
    <MainLayout>
      <section>
        <DriverHeadPartial />
        <DriverBodyPartial />
      </section>
    </MainLayout>
  )
}

export default DriverIndex