import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// mount function to start up the app
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {

  // if in development, use defaultHistory. Otherwise create one
  // with an initial path
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  })

  // make sure navigate function is called to provide location object
  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el)

  return {
    onParentNavigate({pathname: nextPathname}) {
      const { pathname } = history.location

      if(pathname !== nextPathname){
        history.push(nextPathname)
      }
    }
  }
}

// if in development and isolation, run immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

// if running in container
export { mount }