import React, { Component, Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { positions, Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    const isLogin = localStorage.getItem('isLogin')
    const options = {
      timeout: 5000,
      position: positions.TOP_RIGHT,
    }

    return (
      <Provider template={AlertTemplate} {...options}>
        <HashRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route exact path="/register" name="Register Page" element={<Register />} />
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              {isLogin !== 'true' ? (
                <Route exact path="*" name="Login Page" element={<Login />} />
              ) : (
                <>
                  <Route path="*" name="Home" element={<DefaultLayout />} />
                </>
              )}
            </Routes>
          </Suspense>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
