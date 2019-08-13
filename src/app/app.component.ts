import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'impossible';
  private optionsImage: string;
  private helpImage: string;
  private album1 = [];
  private album2 = [];

  constructor(private _lightbox: Lightbox) {
    this.optionsImage = "assets/img/options.gif";
    this.helpImage = "assets/img/helping.jpg";

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

  help(): void {
    this._lightbox.open(this.album2, 0);
  }

  options(): void {
    this._lightbox.open(this.album1, 0);
  }
}
