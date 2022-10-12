import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/Auth/action'
import { loginSelector } from '../../../redux/Auth/selectors'

const Login = () => {
  const initData = {
    username: '',
    password: '',
  }
  const initDataError = {
    usernameError: false,
    passwordError: false,
  }
  const dispatch = useDispatch()
  const loginSelectorData = useSelector(loginSelector)
  const [data, setData] = useState(initData)
  const [dataError, setDataError] = useState(initDataError)
  const [loginError, setLoginError] = useState(false)

  useEffect(() => {
    setLoginError(loginSelectorData.error)
  }, [loginSelectorData])

  const handleClick = () => {
    if (!data.username || !data.password) {
      setDataError({
        usernameError: !!data.username,
        passwordError: !!data.password,
      })
      return
    }
    dispatch(login({ username: data.username, password: data.password }))
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
                        <CButton
                          onClick={handleClick}
                          color="primary"
                          className="px-4"
                          disabled={loginSelectorData.loading}
                        >
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
