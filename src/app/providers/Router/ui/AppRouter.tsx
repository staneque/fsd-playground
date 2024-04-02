import { AboutAsync } from 'pages/About'
import { ErrorPage } from 'pages/Error'
import { MainAsync } from 'pages/Main'
import { LoginAsync } from 'pages/Login'
import { MainLayout } from 'pages/MainLayout'
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { routesPath } from 'shared/config/routeConfig'

export const routes: RouteObject[] = [
  {
    path: routesPath.Main,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routesPath.About,
        element: <AboutAsync />,
      },
      {
        path: routesPath.Main,
        element: <MainAsync />,
      },
      {
        path: routesPath.Login,
        element: <LoginAsync />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
