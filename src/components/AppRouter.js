import React, { Suspense, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../router'
import Layout from './Layout'
import { lazyComponent } from '../operations/lazyComponent'
import Loader from './Loader'

const AppRouter = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [defaultRoute] = routes

  useEffect(() => {
    if (pathname === '/') navigate(defaultRoute.path)
    else navigate(pathname)
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {
          routes.map(({ path, element }) => {
            const LazyComponent = lazyComponent(element)

            return <Route
              path={path}
              key={path}
              element={
                <Suspense fallback={<Loader/>}>
                  <LazyComponent />
                </Suspense>
              }
            />
          })
        }
      </Route>
    </Routes>
  )
}

export default AppRouter
