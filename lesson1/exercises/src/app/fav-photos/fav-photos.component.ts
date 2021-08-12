import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://lh3.googleusercontent.com/Bd-FGpHlw7XOaP6zJJJPiSOz7iuv7VFE52rRtA11iHuAmW5vkiIESkpOZtZQ18RmBjs4tEVjixvEupzYn063odD6If6SLFGMlh6aXA=w272';
  image3 = 'https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1563449509.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850';

  constructor() { }

  ngOnInit() {
  }

}