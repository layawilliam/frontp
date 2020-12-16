import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  animateChild,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('100ms'),
      ]),
      transition('* => void', [
        animate('100ms', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class MapComponent implements OnInit {
  card: any;
  isShown = false;
  constructor() {}

  ngOnInit(): void {}

  prueba(value: number): any {
    this.card = value;
    this.trigger();
  }
  trigger(): void {
    this.isShown = this.isShown ? false : true;
  }
}
