import { AboutAsync } from 'pages/About'
import { MainAsync } from 'pages/Main'
import { MainLayout } from 'pages/MainLayout'
import { RouteObject } from 'react-router-dom'

export enum AppRoutes {
  Main = 'Main',
  About = 'About',
}

export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
}

export const routesConfig: RouteObject[] = [
  {
    path: routesPath.Main,
    element: <MainLayout />,
    children: [
      {
        path: routesPath.About,
        element: <AboutAsync />,
      },
      {
        path: routesPath.Main,
        element: <MainAsync />,
      },
    ],
  },
]
