import React, { FC } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'
import { fontSize, FontSizeProps } from 'styled-system'

const StyledInput = styled(Input)<FontSizeProps>`
  ${fontSize}
  width: 100%
`

type Props = {
  placeholder: string
  fontSize: string | string[] | number[]
  type?: string
}

const LoginInput: FC<Props> = ({ placeholder, fontSize, type }) => (
  <StyledInput fontSize={fontSize} placeholder={placeholder} type={type} />
)

export default LoginInput
