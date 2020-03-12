import { lazy } from 'react'

export const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'))

export const NotFound = lazy(() =>
  import('../common/components/request-results/NotFound'),
)
