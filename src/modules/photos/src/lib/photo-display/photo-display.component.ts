import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.scss'],
})
export class PhotoDisplayComponent {
  photogroup: any;
  constructor(
    private photosService: PhotosService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const photoServData = this.photosService.getPhotoToBeViewedDtails();
    this.activatedRoute.queryParams.subscribe((routerData: any) => {
      if (Object.keys(routerData).length !== 0) {
        let data = JSON.parse(routerData?.data);
        if (data['mode'] === 'private') {
          this.photogroup = photoServData;
        }
      } else {
        this.photogroup = photoServData.filter((x) => {
          return 'public' === x.mode;
        });
      }
    });
  }
}
