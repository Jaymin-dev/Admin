import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CLink,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { Link } from 'react-router-dom'

const Register = () => {
  const initData = {
    username: '',
    email: '',
    password: '',
    newPassword: '',
  }
  const initDataError = {
    usernameError: false,
    emailError: false,
    passwordError: false,
    newPasswordError: false,
  }

  const [data, setData] = useState(initData)
  const [dataError, setDataError] = useState(initDataError)

  const handleChange = ({ target: { value, name } }) => {
    setData({
      ...data,
      [name]: value,
    })
    const errorName = `${name}Error`
    if (!value) {
      setDataError({
        ...dataError,
        [errorName]: true,
      })
    } else {
      setDataError({
        ...dataError,
        [errorName]: false,
      })
    }

    if (['newPassword', 'password'].includes(name) && data.password !== value)
      setDataError({
        ...dataError,
        newPasswordError: true,
      })
  }

  const handleClick = () => {
    const { username, email, password, newPassword } = data
    const error = {}
    if (!username) {
      error.usernameError = true
    }
    if (!email) {
      error.emailError = true
    }
    if (!password) {
      error.passwordError = true
    }
    if (!newPassword || password !== newPassword) {
      error.newPasswordError = true
    }
    if (Object.keys(error).length > 0)
      return setDataError({
        ...error,
      })

    localStorage.setItem('userInfo', JSON.stringify(data))
    window.location.href = '/'
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      value={data.username}
                      name="username"
                      autoComplete="username"
                      onChange={handleChange}
                      invalid={dataError.usernameError}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      value={data.email}
                      name="email"
                      autoComplete="email"
                      onChange={handleChange}
                      invalid={dataError.emailError}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      name="password"
                      type="password"
                      value={data.password}
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={handleChange}
                      invalid={dataError.passwordError}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      name="newPassword"
                      type="password"
                      value={data.newPassword}
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      onChange={handleChange}
                      invalid={dataError.newPasswordError}
                      feedback={data.newPassword && 'Password not match!'}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={handleClick}>
                      Create Account
                    </CButton>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link to="/">
                      <CButton color="light mt-3 float-right">Login</CButton>
                    </Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
