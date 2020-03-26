import React, { FC } from 'react'
import { Form, Button, Checkbox } from 'antd'
import styled from 'styled-components'
import {
  width,
  typography,
  height,
  WidthProps,
  TypographyProps,
  HeightProps,
} from 'styled-system'

import LoginBg from '../../assets/img/login-bg.png'
import { PLACEHOLDER } from '../../common/constants/input-constants'
import { useAuth } from '../../common/context/auth-сontext'

import { LoginInput } from './components'

const { USER_ID, PASSWORD } = PLACEHOLDER

const StyledContainer = styled.div`
  display: flex;
  background-image: url(${LoginBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
`

const StyledForm = styled(Form)<WidthProps>`
  ${width}
  display: flex;
  flex-direction: column;
  margin: auto;
`

const StyledButton = styled(Button)<TypographyProps & HeightProps>`
  ${typography}
  ${height}
`
const StyledCheckbox = styled(Checkbox)`
  color: darkgrey;
  span:first-of-type {
    font-size: 20px;
    height: 20px;
    width: 20px;
  }
  span:last-of-type {
    font-size: 20px;
  }
`

const LoginForm: FC = () => {
  const { login } = useAuth()
  return (
    <StyledContainer>
      <StyledForm
        width={[400, 350]}
        name="basic"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <LoginInput fontSize={[4, 3]} placeholder={USER_ID} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <LoginInput
            fontSize={[4, 3]}
            type="password"
            placeholder={PASSWORD}
          />
        </Form.Item>
        <StyledCheckbox>Remember me</StyledCheckbox>
        <StyledButton
          block
          height={[41]}
          fontSize={[3, 2]}
          type="primary"
          htmlType="submit"
          onClick={login}
        >
          SIGN IN
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  )
}

export default LoginForm
