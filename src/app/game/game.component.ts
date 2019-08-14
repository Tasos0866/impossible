import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit  {
  positionX: number;
  positionY: number;
  keydown: boolean;

  constructor() {
    this.positionX = 500;
    this.positionY = 50;
    this.keydown = false;
   }

  ngOnInit() { 
  } 

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let x = document.getElementsByClassName('table')[0];
    let y = 300;
    if (event.key === "ArrowLeft") {
      if (this.positionX != 0) {
        //document.getElementsByClassName('table')[0].className = "rotate90-left"
        this.positionX = this.positionX - 20;
      }
    } else if (event.key === "ArrowRight") {
      if (this.positionX != (window.innerWidth - 100)) {
        this.positionX = this.positionX + 20;
      }
    } else if (event.key === "ArrowUp" && (!this.keydown)) {
      document.getElementsByClassName('table')[0].className = "rotate90-left"
      this.keydown = true;
      for (let i = 50; i < 300; i++) {
         this.delayUp(x, i);
      }
      setTimeout(() => {
        for (let i = 50; i < 300; i++) {
          y--;
          this.delayDown(x, i, y);
       }
      }, 500);
      setTimeout(() => {  // jump ends
        document.getElementsByClassName('rotate90-left')[0].className = "rotate90-left"
        document.getElementsByClassName('rotate90-left')[0].className = "table"
        this.keydown = false;
      }, 1000);
    }
  }

  delayUp(x: any, i: number) {
    setTimeout(function() {
      x.style.bottom = i.toString() + 'px';
    }, 2 * i);
  }

  delayDown(x: any, i: number, y: number) {
    setTimeout(function() {
      x.style.bottom = y.toString() + 'px';
    }, 2 * i);
  }
}