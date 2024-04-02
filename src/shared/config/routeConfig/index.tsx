export enum AppRoutes {
  Main = 'Main',
  About = 'About',
  Error = 'Error',
  Login = 'Login',
}

export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.Error]: '*',
  [AppRoutes.Login]: '/login',
}
