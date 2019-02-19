import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }

  getAllPhotos() {
    return [
      {
        name: 'Photo 1',
        link: 'https://storage.googleapis.com/appsstorage/1550616895387photo-1550515955-8903cdf74d7d.jpeg'
      },
      {
        name: 'Photo 2',
        link: 'https://storage.googleapis.com/appsstorage/1550617052925photo-1550526377-dad582b3e947.jpeg'
      },
      {
        name: 'Photo 3',
        link: 'https://storage.googleapis.com/appsstorage/1550617077338photo-1550528669-609a04ba67b9.jpeg'
      }
    ];
  }
}
