import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor() {}
  getPhotoToBeViewedDtails(): Array<any> {
    return [
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/download-1.jpg',
        mode: 'private',
      },

      {
        photoId: '',
        imagePath: '../../../../../assets/Image/download-2.jpg',
        mode: 'public',
      },
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/download-3.jpg',
        mode: 'private',
      },
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/download-4.jpg',
        mode: 'public',
      },

      {
        photoId: '',
        imagePath: '../../../../../assets/Image/download.jpg',
        mode: 'private',
      },
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/Photo2.jpg',
        mode: 'public',
      },
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/Photo3.jpg',
        mode: 'public',
      },
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/images-2.jpg',
        mode: 'public',
      },
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/images-3.jpg',
        mode: 'public',
      },
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/images-4.jpg',
        mode: 'public',
      },
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/images-5.jpg',
        mode: 'public',
      },
      {
        photoId: '',
        imagePath: '../../../../../assets/Image/images-6.jpg',
        mode: 'public',
      },
    ];
  }
}
