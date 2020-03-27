import React, { FC } from 'react'
import styled from 'styled-components'
import {
  compose,
  typography,
  height,
  width,
  TypographyProps,
  HeightProps,
  WidthProps,
} from 'styled-system'
import { Avatar } from 'antd'

import UserAvatar from '../../../../../assets/img/ui-sam.jpg'

const StyledAvatar = styled(Avatar)<HeightProps & WidthProps>(
  compose(height, width),
)
const StyledName = styled.span<TypographyProps>`
  ${typography}
  color: #f2f2f2;
  min-width: 100px;
`

const SidebarAvatar: FC = () => {
  return (
    <>
      <StyledAvatar
        height={['12em', '8em']}
        width={['12em', '8em']}
        src={UserAvatar}
      />
      <StyledName fontSize={[5, 3]} fontWeight={[400, 500]}>
        Sam Saffes
      </StyledName>
    </>
  )
}

export default SidebarAvatar
