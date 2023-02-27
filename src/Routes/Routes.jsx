import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'


const Index = lazy(() => import('../Views/Home/Home'))

const routes = createBrowserRouter([  
  {
    path: '/',
    exact: true,
    name: 'Index',
    element: <Index />,
    errorElement: <div>ERROR.......!</div>,
  },
])

export {routes}