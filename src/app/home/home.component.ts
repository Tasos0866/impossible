import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private optionsImage: string;
  private helpImage: string;
  private album1 = [];
  private album2 = [];

  constructor(private lightBox: Lightbox) {
    this.optionsImage = 'assets/img/options.gif';
    this.helpImage = 'assets/img/helping.jpg';

    this.album1.push(
      {
        src: this.optionsImage,
        thumb: this.optionsImage
      }
    );
    this.album2.push(
      {
        src: this.helpImage,
        thumb: this.helpImage
      }
    );
  }

  ngOnInit() {

  }

  help(): void {
    this.lightBox.open(this.album2, 0);
  }

  options(): void {
    this.lightBox.open(this.album1, 0);
  }
}
