import React, { FC } from 'react'
import styled from 'styled-components'

import {
  DropBoxStatics,
  Revenue,
  ServerLoad,
} from '../../../components/content/components/charts/components'

const StyledGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-top: 2em;
`
const ChartsGroup: FC = () => {
  return (
    <StyledGroup>
      <ServerLoad />
      <DropBoxStatics />
      <Revenue />
    </StyledGroup>
  )
}

export default ChartsGroup
