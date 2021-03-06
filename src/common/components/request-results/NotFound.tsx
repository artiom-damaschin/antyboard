import React, { FC } from 'react'
import { Result, Button } from 'antd'
import { ResultProps } from 'antd/lib/result'

const NotFound: FC<ResultProps> = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => {}}>
        Back Home
      </Button>
    }
  />
)

export default NotFound
