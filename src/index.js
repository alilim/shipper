import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DriverIndex from './pages/driver/index'
import './index.css'

export const Root = () => { 
  return  (
    <BrowserRouter basename={'/'} >
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={DriverIndex}/>
      </Switch>
    </BrowserRouter>
  )
} 

ReactDOM.render(<Root />, document.getElementById('root'))