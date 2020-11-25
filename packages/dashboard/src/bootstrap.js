import { createApp } from 'vue'
import Dashboard from './components/Dashboard'

// mount function to start up the app
const mount = (el) => {
 const app = createApp(Dashboard)
 app.mount(el)
}

// if in development and isolation, run immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

// if running in container
export { mount }