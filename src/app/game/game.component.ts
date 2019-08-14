import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit  {
  @ViewChild('rectangle', {static: false}) rect: ElementRef;
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
    let x = document.getElementsByClassName('rectangle')[0];
    let y = 300;

    if (event.key === "ArrowLeft") {
      if (this.positionX != 0) {
        this.positionX = this.positionX - 20;
      }
    } else if (event.key === "ArrowRight") {
      if (this.positionX != (window.innerWidth - 100)) {
        this.positionX = this.positionX + 20;
      }
    } else if (event.key === "ArrowUp" && (!this.keydown)) {
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
      setTimeout(() => {
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