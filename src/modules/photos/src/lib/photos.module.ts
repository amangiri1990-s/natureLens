import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDisplayComponent } from './photo-display/photo-display.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgForOf } from '@angular/common';

const route: Routes = [
  {
    path: '',
    component: PhotoDisplayComponent,
  },
];

@NgModule({
  declarations: [PhotoDisplayComponent],
  imports: [
    MatCardModule,
    RouterModule.forChild(route),
    FlexLayoutModule,
    NgForOf,
  ],
  exports: [PhotoDisplayComponent, MatCardModule, NgForOf],
})
export class PhotosModule {}
