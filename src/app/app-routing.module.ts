import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
];

const routeModulePath: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./../modules/photos/src/public-api').then(
        (mod) => mod.PhotosModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./../modules/photos/src/public-api').then(
        (mod) => mod.PhotosModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../modules/login-page/src/public-api').then(
        (mod) => mod.LoginPageModule
      ),
  },
  {
    path: 'About',
    loadChildren: () =>
      import('./../modules/about/src/public-api').then(
        (mod) => mod.AboutModule
      ),
  },
  {
    path: 'Photos',
    loadChildren: () =>
      import('./../modules/photos/src/public-api').then(
        (mod) => mod.PhotosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routeModulePath)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
