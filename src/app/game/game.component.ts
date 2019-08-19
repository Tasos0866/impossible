import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit  {
  positionX: number;
  positionY: number;
  upKeyDown: boolean;
  leftKeyDown: boolean;
  rightKeyDown: boolean;
  downKeyDown: boolean;

  constructor() {
    this.positionX = (window.innerWidth - 250) / 2;
    this.positionY = 50;
    this.upKeyDown = false;
    this.leftKeyDown = false;
    this.rightKeyDown = false;
    this.downKeyDown = false;
   }

  ngOnInit() { 
  } 

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let y = 300;
    if (event.key === "ArrowLeft" && (!this.upKeyDown) && (!this.rightKeyDown)) {
      if (this.leftKeyDown === false) {
        this.leftKeyDown = true;
        this.setClass('table', 'rotate90-left');
      }
      if (this.positionX > 0) {
        this.positionX = this.positionX - 20;
      }
    } else if (event.key === "ArrowRight" && (!this.upKeyDown) && (!this.leftKeyDown)) {
      if (this.rightKeyDown === false) {
        this.rightKeyDown = true;
        this.setClass('table', 'rotate90-right');
      }
      if (this.positionX < (window.innerWidth - 250)) {
        this.positionX = this.positionX + 20;
      }
    } else if ((event.key === "ArrowUp" || event.key === " ") && (!this.upKeyDown)) {
      this.upKeyDown = true;
      let x = document.getElementsByClassName('table')[0];
      document.getElementsByClassName('table')[0].className = "rotate90-right";
      for (let i = 50; i < 300; i++) {
          this.delayUp(x, i);
      }
      setTimeout(() => {
        for (let i = 50; i < 300; i++) {
          y--;
          this.delayDown(x, i, y);
        }
      }, 500);
      setTimeout(() => {  // jumping is finished
        document.getElementsByClassName('rotate90-right')[0].className = "rotate90-left"
        document.getElementsByClassName('rotate90-left')[0].className = "table"
        this.upKeyDown = false;
      }, 1000);
    } else if (event.key === "ArrowDown" && (!this.upKeyDown) && (!this.leftKeyDown) && (!this.rightKeyDown)) {
      if (!this.downKeyDown) {
        this.setClass('table', 'hide');
        this.downKeyDown = true;
        this.positionY = this.positionY - 115;
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent2(event: KeyboardEvent) {
    if (event.key === "ArrowLeft" && (!this.upKeyDown) && (!this.rightKeyDown)) {
      this.setClass('rotate90-left', 'rotate90-right');
      this.setClass('rotate90-right', 'table');
      this.leftKeyDown = false;
    }
    if (event.key === "ArrowRight" && (!this.upKeyDown) && (!this.leftKeyDown)) {
      this.setClass('rotate90-right', 'rotate90-left');
      this.setClass('rotate90-left', 'table');
      this.rightKeyDown = false;
    }
    if (event.key === "ArrowDown" && (!this.upKeyDown) && (!this.leftKeyDown) && (!this.rightKeyDown)) {
      this.setClass('hide', 'show');
      this.setClass('show', 'table');
      this.positionY = this.positionY + 115;
      this.downKeyDown = false;
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

  setClass(currentClass: string, futureClass: string) {
    let element = document.getElementsByClassName(currentClass);
    if (element.length != 0) {
      document.getElementsByClassName(currentClass)[0].className = futureClass;
    }
  }
}