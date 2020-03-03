import React, { FC } from 'react'
import { navigate, RouteComponentProps } from '@reach/router'

import { Form, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'

import LoginBg from '../../assets/img/login-bg.png'
import { PLACEHOLDER } from '../../common/constants/input-constants'

const { USER_ID, PASSWORD } = PLACEHOLDER

const StyledContainer = styled.div`
  display: flex;
  background-image: url(${LoginBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
`

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 20em;
  height: 15em;
  margin: auto;
  border-radius: 7px;
`

const StyledInput = styled(Input)`
  width: 100%;
`
const StyledButton = styled(Button)`
  float: right;
`
const StyledCheckbox = styled(Checkbox)`
  color: darkgrey;
  vertical-align: central;
`
const StyledFormItem = styled(Form.Item)`
  display: flex;
`

const LoginForm: FC<RouteComponentProps> = () => (
  <StyledContainer>
    <StyledForm name="basic" initialValues={{ remember: true }}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <StyledInput placeholder={USER_ID} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <StyledInput type="password" placeholder={PASSWORD} />
      </Form.Item>

      <StyledFormItem name="remember" valuePropName="checked">
        <StyledCheckbox>Remember me</StyledCheckbox>
        <StyledButton
          type="primary"
          htmlType="submit"
          onClick={() => navigate('/dashboard')}
        >
          SIGN IN
        </StyledButton>
      </StyledFormItem>
    </StyledForm>
  </StyledContainer>
)

export default LoginForm
