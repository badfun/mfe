import { mount } from 'auth/AuthApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default ({ onSignIn} ) => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      // provide initial path
      initialPath: history.location.pathname,
      // change pathname for clarity later
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      onSignIn: () => {
        onSignIn()
      }
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}