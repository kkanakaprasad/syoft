import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from 'src/guards/login.guard';
import { HomeComponent } from 'src/home/home.component';
import { MainComponent } from 'src/main/main.component';
import { RouteConstants } from 'src/shared/constants/routes.constants';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouteConstants.HOME,
  },
  {
    path: RouteConstants.HOME,
    component: HomeComponent,
    children: [],
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [loginGuard],
    children: [
      {
        path: RouteConstants.DASHBOARD,
        loadChildren: () =>
          import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
