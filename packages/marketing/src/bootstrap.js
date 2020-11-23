import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// mount function to start up the app
const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}

// if in development and isolation, run immediately
if( process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_marketing-dev-root')

  if(devRoot){
    mount(devRoot)
  }
}

// if running in container
export { mount }