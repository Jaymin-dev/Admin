import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import logo from '../../../assets/brand/logo-1.png'

const Login = () => {
  const initData = {
    username: '',
    password: '',
  }
  const initDataError = {
    usernameError: false,
    passwordError: false,
  }
  const [data, setData] = useState(initData)
  const [dataError, setDataError] = useState(initDataError)
  const [loginError, setLoginError] = useState(false)
  const handleClick = () => {
    if (!data.username || !data.password) {
      setDataError({
        usernameError: !!data.username,
        passwordError: !!data.password,
      })
      return
    }
    const userData = localStorage.getItem('userInfo')
    const loginUser = {
      username: userData ? JSON.parse(userData)?.email : 'test@test.com',
      password: userData ? JSON.parse(userData)?.password : 'Test@123',
    }
    console.log('loginUser', loginUser)
    if (data.username === loginUser.username && data.password === loginUser.password) {
      localStorage.setItem('isLogin', 'true')
      window.location.reload()
    } else {
      setLoginError(true)
    }
  }
  const handleChange = ({ target: { value, name } }) => {
    setData({
      ...data,
      [name]: value,
    })
    const nameError = `${name}Error`
    if (!value) {
      setDataError({
        ...dataError,
        [nameError]: true,
      })
    } else {
      setDataError({
        ...dataError,
        [nameError]: false,
      })
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        autoComplete="username"
                        value={data.username}
                        invalid={dataError.passwordError}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        autoComplete="current-password"
                        valur={data.password}
                        invalid={dataError.passwordError}
                      />
                    </CInputGroup>
                    {loginError && <CAlert color="danger">Email and password not match</CAlert>}
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={handleClick} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <div>
                      <img src={logo} className="w-50" />
                    </div>
                    {/*<Link to="/register">*/}
                    {/*  <CButton color="primary" className="mt-3" active tabIndex={-1}>*/}
                    {/*    Register Now!*/}
                    {/*  </CButton>*/}
                    {/*</Link>*/}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
