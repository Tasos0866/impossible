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
  upKeyDown2: boolean;
  jumpClass: string;

  constructor() {
    this.positionX = (window.innerWidth - 250) / 2;
    this.positionY = 50;
    this.upKeyDown = false;
    this.leftKeyDown = false;
    this.rightKeyDown = false;
    this.downKeyDown = false;
    this.upKeyDown2 = false;
    this.jumpClass = 'table';
   }

  ngOnInit() {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let y = 300;
    if (event.key === 'ArrowLeft' && (!this.upKeyDown) && (!this.rightKeyDown)) {
      if (this.leftKeyDown === false) {
        this.leftKeyDown = true;
        this.setClass('table', 'rotate90-left');
      }
      if (this.positionX > 0) {
        this.positionX = this.positionX - 20;
      }
    } else if (event.key === 'ArrowRight' && (!this.upKeyDown) && (!this.leftKeyDown)) {
      if (this.rightKeyDown === false) {
        this.rightKeyDown = true;
        this.setClass('table', 'rotate90-right');
      }
      if (this.positionX < (window.innerWidth - 250)) {
        this.positionX = this.positionX + 20;
      }
    } else if ((event.key === 'ArrowUp' || event.key === ' ')
                && (!this.upKeyDown) && (!this.leftKeyDown)
                && (!this.rightKeyDown) && (!this.downKeyDown)) {
      this.upKeyDown = true;
      this.upKeyDown2 = true;
      const x = document.getElementsByClassName(this.jumpClass)[0];
      if (this.jumpClass === 'table') {
        this.setClass('table', 'rotate90-right');
        this.jumpClass = 'rotate90-right';
      }
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
        if (!this.upKeyDown2) {
          this.setClass('rotate90-right', 'rotate90-left');
          this.setClass('rotate90-left', 'table');
          this.jumpClass = 'table';
        }
        this.upKeyDown = false;
      }, 1100);
    } else if (event.key === 'ArrowDown' && (!this.upKeyDown) && (!this.leftKeyDown) && (!this.rightKeyDown)) {
      if (!this.downKeyDown) {
        this.positionY = -65;
        this.setClass('table', 'hide');
        this.downKeyDown = true;
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent2(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' && (!this.upKeyDown) && (!this.rightKeyDown)) {
      this.setClass('rotate90-left', 'rotate90-right');
      this.setClass('rotate90-right', 'table');
      this.leftKeyDown = false;
    }
    if (event.key === 'ArrowRight' && (!this.upKeyDown) && (!this.leftKeyDown)) {
      this.setClass('rotate90-right', 'rotate90-left');
      this.setClass('rotate90-left', 'table');
      this.rightKeyDown = false;
    }
    if (event.key === 'ArrowDown' && (!this.upKeyDown)) {
      this.setClass('hide', 'show');
      this.setClass('show', 'table');
      this.positionY = 50;
      this.downKeyDown = false;
    }
    if ((event.key === 'ArrowUp' || event.key === ' ') && (!this.leftKeyDown) && (!this.rightKeyDown) && (!this.downKeyDown)) {
      this.upKeyDown2 = false;
      this.jumpClass = 'table';
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
    const element = document.getElementsByClassName(currentClass);
    if (element.length !== 0) {
      document.getElementsByClassName(currentClass)[0].className = futureClass;
    }
  }

  newTabGithub() {
    window.open('https://github.com/Tasos0866/impossible', '_blank');
  }
}
