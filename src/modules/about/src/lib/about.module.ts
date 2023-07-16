import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
  },
];

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    FlexLayoutModule,
    NgForOf,
  ],
  exports: [AboutPageComponent, NgForOf],
})
export class AboutModule {}
