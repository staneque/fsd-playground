import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from 'shared/config/routeConfig/routeConfig'

const router = createBrowserRouter(routesConfig)

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
