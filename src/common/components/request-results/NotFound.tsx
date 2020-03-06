import React, { FC } from 'react'
import { Result, Button } from 'antd'
import { ResultProps } from 'antd/lib/result'
import { navigate, RouteComponentProps } from '@reach/router'

const NotFound: FC<ResultProps & RouteComponentProps> = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => navigate('/dashboard')}>
        Back Home
      </Button>
    }
  />
)

export default NotFound
