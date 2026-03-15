import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'trips',
    pathMatch: 'full'
  },
  {
    path: 'trips',
    loadChildren: () =>
      loadRemoteModule('trips', './routes').then((m) => m.APP_ROUTES ?? m.routes),
  },
  {
    path: 'planner',
    loadChildren: () =>
      loadRemoteModule('planner', './routes').then((m) => m.APP_ROUTES ?? m.routes),
  }
];
