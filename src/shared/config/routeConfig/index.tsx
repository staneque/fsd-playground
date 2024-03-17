export enum AppRoutes {
  Main = 'Main',
  About = 'About',
}

export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
}
