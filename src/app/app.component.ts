import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filter = '';
  photos = [];

  constructor(
    private photosService: PhotosService
  ) { }

  ngOnInit() {
    this.photos = this.photosService.getAllPhotos();
    console.log(this.photos);
  }
}
