import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from '../redux/store'
import DriverIndex from './pages/driver/index'
import './index.css'


export const Root = () => { 
  return  (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename={'/'} >
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={DriverIndex}/>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
} 

ReactDOM.render(<Root />, document.getElementById('root'))