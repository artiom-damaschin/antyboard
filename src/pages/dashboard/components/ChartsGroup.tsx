import React, { FC } from 'react'
import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'

import {
  DropBoxStatics,
  Revenue,
  ServerLoad,
} from '../../../components/content/components/charts/components'

const StyledGroup = styled.div<FlexboxProps>`
  ${flexbox}
  display: flex;
  margin-top: 2em;
`
const ChartsGroup: FC = () => {
  return (
    <StyledGroup
      flexDirection={['column', 'row']}
      flexWrap="nowrap"
      alignItems="center"
    >
      <ServerLoad />
      <DropBoxStatics />
      <Revenue />
    </StyledGroup>
  )
}

export default ChartsGroup
