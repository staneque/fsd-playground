export enum AppRoutes {
  Main = 'Main',
  About = 'About',
  Error = 'Error',
}

export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.Error]: '*',
}
